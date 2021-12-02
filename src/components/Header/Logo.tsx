import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
        >
            You.
            <Text
                as="span"
                color="red.400"
            >
                Analyse
            </Text>
        </Text>
    );
}