import React, { useState } from "react";
import Img1 from "../assets/images/image1.png";
import { useAvatar } from "../context/avatar-context";

const Avatar = () => {
  const { userAvatar, handleChangeAvatar } = useAvatar();

  return (
    <section className="bg-slate-800 fixed left-0 top-[100px] h-full">
      <div className="wrapper pt-20 flex flex-col justify-center items-center gap-5">
        <img
          className="w-[300px] h-[300px] border-4 border-solid border-blue-500 rounded-full object-cover"
          src={userAvatar || Img1}
          alt="img"
        />
        <label
          htmlFor="change-profile"
          className="rounded-lg mt-5 font-medium bg-blue-500 text-white px-6 py-3"
        >
          Change avatar
        </label>
        <input
          onChange={handleChangeAvatar}
          className="opacity-0"
          type="file"
          name=""
          id="change-profile"
        />
      </div>
    </section>
  );
};

export default Avatar;
