import React, { useState } from "react";

export default function Card({props}) {
  let {heading,span,color} = props;
  return (
    <div className="md:w-[15vw] px-3 py-4 rounded-[10px]"  style={{backgroundColor: color}}>
      <h1>{heading}</h1>
      <div className=" h-8 md:w-[13vw] w-50 border-2 flex justify-between pl-2 items-center my-2 rounded-[10px]">
        <h1>{span}</h1>
      </div>
    </div>
  );
}
