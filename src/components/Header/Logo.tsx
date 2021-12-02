import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
        >
            You  &nbsp;
            <Text
                as="span"
                color="red.400"
            >
                Analyse
            </Text>
        </Text>
    );
}