import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

export const addContact = createAction("contact/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction("contact/delete");
export const changeFilter = createAction("contact/changeFilter");
