import { Box, Flex, Heading, Button, Icon } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" alignItems="center">
                        <Heading size="lg" fontWeight="normal">Users</Heading>

                        <Button
                            as="a"
                            size="sm"
                            colorScheme="red"
                            leftIcon={<Icon  as={RiAddLine}/>}
                        >
                            New user
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}