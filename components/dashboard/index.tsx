import { Flex, Grid, GridItem } from '@chakra-ui/react';
import FluidCMS from 'fluidcms-api';
import { useEffect, useState } from 'react';
import Card from '../video-card/card';
import DashboardNavbar from './navbar';
const FluidAPI = FluidCMS('ISi8jIcTQhKa');
const DashboardComponent = () => {
  const [data, setData] = useState<Dashboard.RootObject[]>([]);
  async function getProducts() {
    const data = await FluidAPI.getAllRecords('video');
    setData(data as unknown as Dashboard.RootObject[]);
  }
  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);
  return (
    <Flex gap="2em" flexDir={'column'} w="full" h="full" p="1em">
      <DashboardNavbar />
      <Grid w="full" h="full" templateColumns="repeat(4, 1fr)" gap={2}>
        {data?.map((video, i) => (
          <GridItem w="100%" h="20em" key={i}>
            <Card video={video} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default DashboardComponent;
