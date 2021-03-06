import { Button} from '@chakra-ui/react'


interface PaginationItemProps {
    isCurrent?: boolean;
    number: number
}

export function PaginationItem({isCurrent=false, number}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="red"
                disabled_disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        );
    }
    
    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            disabled_disabled={{
                bgColor: 'gray.500',
            }}
        >
            {number}
        </Button>
    );
}