import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import DashboardComponent from '../components/dashboard';
import Navbar from '../layout/navbar';
import Sidebar from '../layout/sidebar';
const Home: NextPage = () => {
  return (
    <Flex flexDir={'column'} w="full" h="max-content" minH="100vh">
      <Navbar />
      <Flex flex={1} w="full" h="full">
        <Flex flex={'.09'}>
          <Sidebar />
        </Flex>
        <Flex flex={'.91'}>
          <DashboardComponent />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
