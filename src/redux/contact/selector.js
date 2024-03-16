import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";

export const selectDataContacts = (state) => state.contact.items;
export const selectFilter = (state) => state.filter;
export const selectIsLoading = (state) => state.contact.isLoading;
export const filtData = createSelector(
  [selectDataContacts, selectFilter],
  (contacts, filter) => {
    if (filter === "") {
      return contacts;
    }
    const options = {
      keys: ["name", "number"],
      includeScore: true,
    };
    const fuse = new Fuse(contacts, options);
    return fuse.search(filter).map((el) => el.item);
  }
);