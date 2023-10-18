"use client";

import React from "react";
import { FormElementInstance, FormElements } from "./form-elements";

const DesignerElementWrapper = ({
  element,
}: {
  element: FormElementInstance;
}) => {
  const DesignerElement = FormElements[element.type].designerComponent;

  return <DesignerElement />;
};

export default DesignerElementWrapper;
