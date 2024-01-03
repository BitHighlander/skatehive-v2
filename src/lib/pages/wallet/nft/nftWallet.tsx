import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";

import AllNfts from "./allNfts";
import GnarsNfts from "./gnarsNfts";
import PoapWallet from "./poapWallet";

const NftWallet = () => {
  return (
    <Flex flexDirection="column">
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>POAPs</Tab>
          <Tab>Gnars</Tab>
          <Tab>All NFTs</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PoapWallet />
          </TabPanel>
          <TabPanel>
            <GnarsNfts />
          </TabPanel>
          <TabPanel>
            <AllNfts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default NftWallet;
