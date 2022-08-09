import { Flex, Text } from '@chakra-ui/react';
import { HiHome } from 'react-icons/hi';
import { ImCompass2 } from 'react-icons/im';
import {
  MdOutlineSlowMotionVideo,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from 'react-icons/md';
import { VscHistory } from 'react-icons/vsc';
const SidebarData = [
  {
    title: 'Home',
    icon: <HiHome size={25} />,
  },
  {
    title: 'Explore',
    icon: <ImCompass2 size={25} />,
  },
  {
    title: 'Shorts',
    icon: <MdOutlineSlowMotionVideo size={25} />,
  },
  {
    title: 'Subscription',
    icon: <MdOutlineSubscriptions size={25} />,
  },
  {
    title: 'Library',
    icon: <MdOutlineVideoLibrary size={25} />,
  },
  {
    title: 'History',
    icon: <VscHistory size={25} />,
  },
];

const Sidebar = () => {
  return (
    <Flex w="full" h="full" flexDir={'column'} borderRight={'1px solid #ccf'}>
      {SidebarData.map((data, idx) => (
        <SideBarBox data={data} key={idx} />
      ))}
    </Flex>
  );
};

const SideBarBox = ({
  data,
}: {
  data: {
    title: string;
    icon: JSX.Element;
  };
}) => {
  return (
    <Flex
      gap=".5em"
      alignItems={'center'}
      justifyContent="center"
      flexDir={'column'}
      w="full"
      h="5em"
      transition={'all 300ms ease'}
      _hover={{ background: '#F0EBEF' }}
      cursor="pointer"
    >
      {data.icon}
      <Text fontSize={'1.1em'}>{data.title}</Text>
    </Flex>
  );
};

export default Sidebar;
