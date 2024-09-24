import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
export const ItemListContainer = ({ products }) => {
    //Se coloca un Flex para que se acomoden los cards uno al lado de otro y el atributo wrap obliga a mis cards a amoldarse al contenedor (no hace overflow en x)
    return (
        <Flex wrap={"wrap"}>
            {products.map((item) => {
                return (
                    <Center py={6} key={item.id}>
                        <Box
                            w="xs"
                            rounded={"sm"}
                            my={5}
                            mx={[0, 5]}
                            overflow={"hidden"}
                            bg="white"
                            border={"1px"}
                            borderColor="black"
                            boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
                        >
                            <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                                <Img
                                    src={item.thumbnail}
                                    roundedTop={"sm"}
                                    objectFit="cover"
                                    h="full"
                                    w="full"
                                    alt={"Blog Image"}
                                />
                            </Box>
                            <Box p={4}>
                                <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                                    {item.name}
                                </Heading>
                                <Text color={"gray.500"} noOfLines={2}>
                                    {item.description}
                                </Text>
                                <Box
                                    bg="black"
                                    display={"inline-block"}
                                    px={2}
                                    py={1}
                                    color="white"
                                    mb={2}
                                >
                                    <Box
                                        bg="gold"
                                        display={"inline-block"}
                                        px={2}
                                        py={1}
                                        color="white"
                                        mb={2}
                                    >
                                        <Text fontSize={"xs"} fontWeight="medium">
                                            ★ {item.rating}
                                        </Text>
                                    </Box>
                                <Text fontSize={"xs"} fontWeight="medium">
                                    ${item.price}
                                </Text>
                            </Box>
                        </Box>
                        <HStack borderTop={"1px"} color="black">
                            <Flex
                                p={4}
                                alignItems="center"
                                justifyContent={"space-between"}
                                roundedBottom={"sm"}
                                cursor={"pointer"}
                                w="full"
                            >
                                <Text fontSize={"md"} fontWeight={"semibold"}>
                                    View more
                                </Text>
                                <BsArrowUpRight />
                            </Flex>
                        </HStack>
                    </Box>
                    </Center>
    );
})}


        </Flex >
    );
};

export default ItemListContainer;
