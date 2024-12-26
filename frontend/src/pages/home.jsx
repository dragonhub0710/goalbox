import React from "react";
import { Sidebar } from "@/widgets/sidebar/sidebar";
import { MainContent } from "@/widgets/mainContent/mainContent";
import { NewChat } from "@/widgets/newChat/newChat";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen w-full">
        <Sidebar />
        <MainContent />
        <div className="absolute bottom-0 right-10">
          <NewChat />
        </div>
      </div>
    </>
  );
}

export default Home;
