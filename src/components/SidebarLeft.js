import React from "react";
import { data } from "../data";

export default function SidebarLeft() {
  return (
    <>
        <h1>
            {data.welcome.left.line0}
        </h1>
        <p>
            {data.welcome.left.line1}
        </p>
        <p>
            {data.welcome.left.line2}
        </p>
        <p>
            {data.welcome.left.line3}
        </p>
    </>
  );
}