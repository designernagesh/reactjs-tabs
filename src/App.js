import { Container, Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
let url = 'http://localhost:3031/data'; 

function App() {
   const [data, setData] = useState([]);
   
   const fetchData = async () => {
    try {
      let response = await fetch(url);
      let result  = await response.json();
      setData(result);
    }
    catch (error) {
      console.error("Error:", error.message )
    }
   }

   useEffect(() => fetchData, []);

  return (
    <Container maxW='5xl' mt='30px'>
        <Box boxShadow='lg' p='6' rounded='md' bg='white'>
          <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>
            Tab Component
          </Heading>
          <Tabs>
            <TabList>
              {data.map((tab, index) => (
                <Tab key={index} fontWeight='bold'>{tab.title}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {data.map((tab, index) => (
                <TabPanel p={4} key={index}>
                  {tab.duties}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
    </Container>
  );
}

export default App;
