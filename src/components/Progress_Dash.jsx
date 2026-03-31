import React, { useState } from "react";

export default function Progress_Dash({props,children}) {
    let {subject,teacher} = props;
  return (
    <div className=" w-50 border-2 flex flex-col px-2 py-2 m-5 gap-5 rounded-[10px] cursor-pointer">
      <div>
      <h1>{subject}</h1>
       <span className="text-blue-600">({teacher})</span>
       </div>
      <div className="h-4 w-[90%] rounded-[10px] bg-blue-300">
        {children}
      </div>
    </div>
  );
}
