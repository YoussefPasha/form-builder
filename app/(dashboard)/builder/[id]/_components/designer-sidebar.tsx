import React from "react";
import { FormElements } from "./form-elements";
import SidebarBtnElement from "./sidebar-btn-elements";
// import useDesigner from "./hooks/useDesigner";
// import FormElementsSidebar from "./FormElementsSidebar";
// import PropertiesFormSidebar from "./PropertiesFormSidebar";

function DesignerSidebar() {
  //   const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {/* {!selectedElement && <FormElementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />} */}
      <SidebarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
}

export default DesignerSidebar;
