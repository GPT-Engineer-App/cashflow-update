import { Box, Container, Flex, Heading, HStack, Link, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Life & Arts</Link>
          <Link href="#" color="white">Tech</Link>
        </HStack>
      </Flex>
      <Box bg="gray.100" p={10}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">Welcome to Financial Times</Heading>
          <Text fontSize="lg">Stay updated with the latest news and insights from around the world.</Text>
        </VStack>
      </Box>
      <Box bg="white" p={10}>
        <VStack spacing={8} align="start">
          <Heading as="h3" size="lg">Latest Articles</Heading>
          <Box>
            <Heading as="h4" size="md">Article 1</Heading>
            <Text>Summary of the first article...</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md">Article 2</Heading>
            <Text>Summary of the second article...</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md">Article 3</Heading>
            <Text>Summary of the third article...</Text>
          </Box>
        </VStack>
      </Box>
      <Flex as="footer" bg="gray.800" color="white" p={4} align="center" justify="center">
        <HStack spacing={4}>
          <Link href="#" color="white"><FaTwitter /></Link>
          <Link href="#" color="white"><FaFacebook /></Link>
          <Link href="#" color="white"><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;