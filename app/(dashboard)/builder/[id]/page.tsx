import { GetFormById } from "@/actions/form";
import React from "react";
import FormBuilder from "./_components/form-builder";

const BuilderPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("form not found");
  }
  return <FormBuilder form={form} />;
};

export default BuilderPage;
