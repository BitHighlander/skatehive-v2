import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useTabs,
  HStack,
  VStack,
  Text,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import UploadPage from "../upload";

import Chat from "./chat";
import CommunityTotalPayout from "./dao/commmunityPayout";
import CommunityStats from "./dao/communityStats";
import CreateAccountCTA from "./dao/createAccountCTA";
import NewFeature from "./dao/newFeature";
import SkatehiveProposals from "./dao/snapshot";
import HiveBlog from "./Feed/Feed";
import "@fontsource/creepster";

const Home = () => {
  const { selectedIndex, ...tabProps } = useTabs({ isLazy: true });

  const isBigScreen = window.innerWidth >= 768;
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex direction="column">
      <Tabs
        isFitted
        variant="solid-rounded"
        justifyContent="center"
        {...tabProps}
      >
        <Center>
          <TabList display="flex" width="85%">
            <Tab
              color="lightgreen"
              background="linear-gradient(0deg, black, darkgreen, black)"
              _selected={{
                background: "linear-gradient(0deg, black, limegreen, black)",
                color: "black",
                fontWeight: "bold",
                border: "none",
              }}
            >
              📜 FEED
            </Tab>

            <Tab
              color="lightgreen"
              background="linear-gradient(0deg, black, darkgreen, black)"
              _selected={{
                background: "linear-gradient(0deg, black, limegreen, black)",
                color: "black",
                fontWeight: "bold",
                border: "none",
              }} // Change the background color when selected
            >
              🛹 UPLOAD
            </Tab>
            <Tab
              color="lightgreen"
              background="linear-gradient(0deg, black, darkgreen, black)"
              _selected={{
                background: "linear-gradient(0deg, black, limegreen, black)",
                color: "black",
                fontWeight: "bold",
                border: "none",
              }} // Change the background color when selected
            >
              🏛 DAOs
            </Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                marginTop: "5px",
              }}
            >
              <img
                src="https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/web-gnar/23uQ3d5BKcoYkuYWd7kZrnS396M1M6DvsMa5MowAmaVynQr67ChnARGaFstnMGeSspzwR.png"
                alt="Skatehive Image"
                style={{ width: "100%" }}
              />
            </div>

            <HStack justifyContent="center" marginBottom="10px">
              {!isMobile && <CreateAccountCTA />}
              <CommunityTotalPayout communityTag="hive-173115" />
              {!isMobile && <CommunityStats communityTag="hive-173115" />}
              {!isMobile && <NewFeature />}
            </HStack>

            {/* <Text fontFamily="Creepster" color="white" fontSize="42px" marginBottom="10px">
              Skatehive and Gnars Wish you a Merry Xmas!
            </Text> */}
            {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxWidth: '80%', // Adjust the maxWidth as needed
                  background: 'black',
                  padding: '20px',
                }}
              >
                <div style={{
                  width: '100%', marginBottom: '16px', borderRadius: '20px',
                }}>
                  <iframe
                    src="https://zora.co/collect/zora:0xd11f5c95a167afdb94a990dd2ff21086df0c39da/4/embed?referrer=0x41CB654D1F47913ACAB158a8199191D160DAbe4A"
                    style={{
                      border: '0',
                      backgroundColor: 'black',
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/9', // Maintain aspect ratio
                    }}
                    allowTransparency={true}
                    allowFullScreen={true}
                    sandbox="allow-pointer-lock allow-same-origin allow-scripts allow-popups"
                  ></iframe>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <a
                    href="https://zora.co/collect/zora:0xd11f5c95a167afdb94a990dd2ff21086df0c39da/4"
                    style={{
                      padding: '12px',
                      textDecoration: 'none',
                      color: '#b3b3b3',
                      fontFamily: 'Inter, system-ui',
                      fontSize: '10px',
                      lineHeight: '12px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      marginRight: '16px',
                    }}
                  >
                    GNARLY XMAS on Zora
                  </a>
                </div>
              </div> */}

            <HiveBlog />
          </TabPanel>
          {/* <TabPanel>
            <HiveVideos />
          </TabPanel> */}
          {/* <TabPanel>
            <QFS />
          </TabPanel> */}
          <TabPanel>
            <UploadPage />
          </TabPanel>
          <TabPanel>
            <SkatehiveProposals />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {isBigScreen && <Chat />}{" "}
      {/* Render Chat component only on big screens */}
    </Flex>
  );
};

export default Home;
