import React from "react";
import welcome from "@/assets/images/welcome01.png";

export default function HomeIndex() {
  return (
    <div className="home card">
      <img src={welcome} alt="welcome" />
    </div>
  );
}
