import React from "react";
import UIKernel from "uikernel";
import model from ".././Model/Model";
import columns from ".././Model/Columns";

export const Table = () => {
  return <UIKernel.Grid cols={columns} model={model} />;
};
