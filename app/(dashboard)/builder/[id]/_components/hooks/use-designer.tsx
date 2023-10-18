"use client";

import React, { useContext } from "react";
import { DesignerContext } from "../context/designer-context";

const UserDesigner = () => {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("useDesigner must be used within a DesignerContext");
  }

  return context;
};

export default UserDesigner;
