import React from "react";

import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { TherapistBannar } from "./TherapistBanner";
import { ChatWithBloom } from "./ChatWithBloomBtn";

export function HomeScreenAllUsers() {
  return (
    <>
      <Navbar />
      <Hero />
      <TherapistBannar />
      <ChatWithBloom />
    </>
    // <>
    //   <Navbar />
    //   <Hero />
    //   <TherapistBannar />
    //   <ChatWithBloom />
    // </>
  );
}
