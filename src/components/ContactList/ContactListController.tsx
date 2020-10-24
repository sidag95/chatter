import React from "react";
import { getDefaultContactList } from "../Api/mocks";
import { ContactListContext } from "./ContactListContext";
import { ContactListContextType, ContactListControllerType } from "./types";

export function ContactListController(props: ContactListControllerType) {
  const { children } = props;
  // fetch contact list here
  const contextValue: ContactListContextType = {
    contacts: getDefaultContactList(),
    isLoading: false,
    hasLoaded: true,
    error: null
  };
  // setup context provider
  return (
    <ContactListContext.Provider value={contextValue}>
      {children}
    </ContactListContext.Provider>
  );
}
