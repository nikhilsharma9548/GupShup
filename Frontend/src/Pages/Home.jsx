import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { AnimatePresence, motion } from "motion/react";
import ChatContainer from "../Components/ChatContainer";
import RightSideBar from "../Components/RightSideBar";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <div className="w-full h-full">

      
      <div
        className={`overflow-hidden grid h-full  relative
        ${selectedUser ? "md:grid-cols-[1fr_3fr]" : "md:grid-cols-[1fr_3fr]"}`}
      >
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ChatContainer
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setOpenUser={setOpenUser}
        />

        {/* RightSideBar Overlay */}
        <AnimatePresence>
          {openUser && (
            <motion.div
              initial={{ opacity: 0, scale: 1}}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen max-sm:pt-5 sm:bg-black/50 bg-slate-800 flex flex-col"
            >
              {/* Close Button */}
              <div className="absolute top-0 right-0">
                <button
                  onClick={() => setOpenUser(false)}
                  className="text-white px-3 py-2 rounded cursor-pointer"
                >
                  ✖
                </button>
              </div>

              {/* RightSideBar Content */}
              <div className="w-full flex justify-center overflow-y-auto p-4">
                <RightSideBar
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
