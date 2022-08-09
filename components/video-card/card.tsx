import { Flex, Image, Text } from '@chakra-ui/react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Dashboard } from '../../types/dashboard';

const Card = ({ video }: { video: Dashboard.RootObject }) => {
  return (
    <Flex gap="1em" h="20em" flexDir={'column'}>
      <Image objectFit={'cover'} h="12em" src={video.fields.image} w="full" />
      <Flex w="full" justifyContent={'space-between'}>
        <Flex gap=".5em">
          <Image
            w="2.5em"
            h="2.5em"
            borderRadius={'full'}
            objectFit="cover"
            src={video.fields.logo}
          />
          <Flex flexDir={'column'} gap=".4em">
            <Text fontWeight={'semibold'}>{video.fields.title}</Text>
            <Flex flexDir={'column'}>
              <Text color="blackAlpha.800" fontSize={'.9em'}>
                {video.fields.chennal_name}
              </Text>
              <Text color="blackAlpha.800" fontSize={'.9em'}>
                {video.fields.history}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <HiOutlineDotsVertical size={22} />
      </Flex>
    </Flex>
  );
};

export default Card;
