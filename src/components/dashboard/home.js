import React from "react";
import NavBar from "../navbar";
import UserAvatar from "../userAvatar"
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-screen w-screen bg-yellow-300 flex justify-end ">
      <NavBar />
      <Box sx={{ pr: "5px", pt: "5px" }}>
        <UserAvatar />
      </Box>
      <Outlet/>
    </div>
  );
};
