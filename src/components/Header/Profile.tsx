import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
           {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Jonathan Magalhães</Text>
                    <Text color="gray.300" fontSize="small">jonathanmundi@gmail.com</Text>
                </Box>
           )}
            <Avatar size="md" name="Jonathan Magalhaes" src="https://github.com/kamum.png" />
        </Flex>
    );
}