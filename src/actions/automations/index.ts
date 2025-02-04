"use server";

import { onCurrentUser } from "../user";
import { createAutomation } from "./queries";

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id);
    if (create) {
      return {
        status: 200,
        data: {
          message: "Automation created",
        },
      };
    }
    return { status: 404, data: { message: "Automation not created" } };
  } catch (error) {
    console.log(error);
    return { status: 500, data: { message: "Internal server error" } };
  }
};
