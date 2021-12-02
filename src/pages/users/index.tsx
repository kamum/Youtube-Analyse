import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import Link from 'next/link';

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" alignItems="center">
                        <Heading size="lg" fontWeight="normal">Users</Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                colorScheme="red"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                New user
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" widh="8">
                                    <Checkbox colorScheme="red" />
                                </Th>
                                <Th>User</Th>
                                {isWideVersion && <Th>Registration Date</Th>}
                                
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Jonathan Magalhães</Text>
                                        <Text fontSize="small" color="gray.300">jonathanmundi@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>December 01 2021</Td> }
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        { isWideVersion ? 'Edit' : '' }
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Jonathan Magalhães</Text>
                                        <Text fontSize="small" color="gray.300">jonathanmundi@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>December 01 2021</Td> }
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        { isWideVersion ? 'Edit' : '' }
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Jonathan Magalhães</Text>
                                        <Text fontSize="small" color="gray.300">jonathanmundi@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>December 01 2021</Td> }
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        { isWideVersion ? 'Edit' : '' }
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}