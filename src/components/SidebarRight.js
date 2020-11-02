import React from "react";
import { data } from "../data";

export default function SidebarRight() {
  return (
    <>
      <h1>
        {data.welcome.right.line0}
      </h1>
      <img className="coat" src={data.img.coatPoland} alt="" />
      <p className="maciej-speech">
        {data.welcome.right.line1}
      </p>
    </>
  );
}