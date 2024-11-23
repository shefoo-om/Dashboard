import React from "react";
import "../../app/loading.css";
export default function Loader() {
  return (
    <div className="loader min-h-screen flex justify-center items-center bg-white">
      <div className="three-body">
        <div className="three-body__dot" />
        <div className="three-body__dot" />
        <div className="three-body__dot" />
      </div>
    </div>
  );
}
