import "./App.css";
import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import Avatar from "./components/Avatar";
import { AvatarProvider } from "./context/avatar-context";

function App() {
  return (
    <>
      <AvatarProvider>
        <Header></Header>
        <Post></Post>
        <Avatar></Avatar>
      </AvatarProvider>
    </>
  );
}

export default App;
