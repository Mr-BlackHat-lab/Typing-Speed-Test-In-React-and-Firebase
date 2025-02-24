import React from "react";
import Typingbox from "./Typingbox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Style/Home.css";

function Home() {
  return (
    <div>
      <div class="parent">
        <div class="div1"><Navbar/></div>
        <div class="div2"><Typingbox/></div>
        <div class="div3">abbb</div>
        <div class="div4"><Footer/></div>
      </div>
    </div>
  );
}

export default Home;
