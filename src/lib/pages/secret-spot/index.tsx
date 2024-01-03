import { Center, TabList, Tabs, Tab } from "@chakra-ui/react";
import * as dhive from "@hiveio/dhive";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

import Shelf from "../home/videos/lbry";

import CaptchaPage from "./captcha";
// Initialize the Hive client with API endpoints
const client = new dhive.Client([
  "https://api.hive.blog",
  "https://api.hivekings.com",
  "https://anyx.io",
  "https://api.openhive.network",
]);

// Function to check if a Hive account exists

function PepeCaptcha() {
  const [captchaCompleted, setCaptchaCompleted] = useState<boolean | null>(
    null
  );

  // Callback function to set the captcha completion status
  const handleCaptchaCompletion = (completed: boolean) => {
    setCaptchaCompleted(completed);
  };

  return (
    <Center minH="100%">
      {captchaCompleted === null ? (
        <CaptchaPage onCaptchaCompletion={handleCaptchaCompletion} />
      ) : (
        <Tabs minW="100%">
          <TabList>
            <Tab>411vm</Tab>
            <Tab>TransWorld</Tab>
          </TabList>
          <Tab>
            <Shelf />
          </Tab>
        </Tabs>
      )}
    </Center>
  );
}

export default PepeCaptcha;
