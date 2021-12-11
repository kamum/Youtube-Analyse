import { Stack, Box , Text} from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountRegister: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1;
        })
        .filter(page => page > 0)
}

export function Pagination({ 
    totalCountRegister,
    registersPerPage  = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps) {
    const lastPage = Math.floor(totalCountRegister /registersPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)  
        : []

    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount))  
        : []
    return (
        <Stack
            direction={["column", "row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem number={1} />
                        { currentPage > (2 + siblingsCount) && (
                            <Text color='gray.300' widt="8" textAlign="center">...</Text>
                        )}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} number={page} />
                })}
                
                <PaginationItem number={currentPage} isCurrent/>
                
                {nextPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} number={page} />
                })}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        { (currentPage + 1 + siblingsCount) < lastPage && (
                            <Text color='gray.300' widt="8" textAlign="center">...</Text>
                        )}
                        <PaginationItem number={lastPage} />
                    </>
                )}
                
            </Stack>
        </Stack>
    )
}