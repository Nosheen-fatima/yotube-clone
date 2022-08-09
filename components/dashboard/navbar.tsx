import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

const DashboardData = [
  'All',
  'Live',
  'Music',
  'Drama',
  'Movie',
  'Cartoon',
  'Cricket',
  'Movie',
  'Cartoon',
  'Cricket',
];
const DashboardNavbar = () => {
  const [cliecked, setCliecked] = useState(0);
  return (
    <Flex
      w="full"
      h="3.5em"
      gap="1em"
      overflow={'auto'}
      borderBottom={'1px solid #ccf'}
    >
      {DashboardData.map((text, idx) => (
        <Button
          onClick={() => setCliecked(idx)}
          background={cliecked === idx ? 'black' : 'transparent'}
          color={cliecked === idx ? 'white' : 'black'}
          px="1em"
          borderRadius={'full'}
          key={idx}
        >
          {text}
        </Button>
      ))}
    </Flex>
  );
};

export default DashboardNavbar;
