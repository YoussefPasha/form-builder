import React from "react";
import { FormElements } from "./form-elements";
import SidebarBtnElement from "./sidebar-btn-elements";
import UserDesigner from "./hooks/use-designer";
import FormElementsSidebar from "./form-elements-sidebar";
import PropertiesFormSidebar from "./properties-form-sidebar";

function DesignerSidebar() {
  const { selectedElement } = UserDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {!selectedElement && <FormElementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
      {/* <SidebarBtnElement formElement={FormElements.TextField} /> */}
    </aside>
  );
}

export default DesignerSidebar;
