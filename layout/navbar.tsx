import { Flex, IconButton, Image, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaMicrophone, FaRegUserCircle } from 'react-icons/fa';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
const Navbar = () => {
  const [isIconOpen, setIsIconOpen] = useState(false);
  return (
    <Flex
      justifyContent={'space-between'}
      px="2em"
      alignItems={'center'}
      w="full"
      h="10vh"
      borderBottom={'1px solid #ccf'}
      shadow="sm"
    >
      <Flex gap={'1em'} alignItems={'center'}>
        <FiMenu size={24} />
        <Image src="/y-logo.png" w="7em" h="4em" objectFit={'contain'} />
      </Flex>
      <Flex w="max-content" gap={'1em'}>
        <Flex w="35em" border={'1px solid #ccc'}>
          <IconButton
            aria-label="input"
            variant={'unstyled'}
            border="none"
            children={<FiSearch />}
            w={isIconOpen ? '3em' : '0em'}
            display={isIconOpen ? 'flex' : 'none'}
            justifyContent="center"
          />
          <Input
            placeholder="Search..."
            outline={'none'}
            border="none"
            borderRadius={'none'}
            borderRight={'1px solid #ccc'}
            focusBorderColor="none"
            onFocus={() => setIsIconOpen(true)}
            onBlur={() => setIsIconOpen(false)}
          />
          <IconButton
            aria-label="input"
            variant={'outline'}
            border="none"
            children={<FiSearch />}
            w="4em"
          />
        </Flex>
        <IconButton
          aria-label="microphone"
          borderRadius={'full'}
          children={<FaMicrophone />}
        />
      </Flex>
      <Flex alignItems={'center'} gap="1em">
        <HiOutlineDotsVertical size={24} />
        <Flex
          alignItems={'center'}
          justifyContent="center"
          h="2.5em"
          w="max-content"
          px={'1.5em'}
          border="1px solid blue"
          gap={'.5em'}
          cursor="pointer"
          color="blue.500"
        >
          <FaRegUserCircle size={24} />
          <Text fontSize={'1.2em'}>Sign In</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
