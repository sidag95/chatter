import React from "react";
import { ContactListContext } from "./ContactListContext";
import { ContactListContextType, ContactListControllerType } from "./types";

export function ContactListController(props: ContactListControllerType) {
  const { children } = props;
  // fetch contact list here
  const contextValue: ContactListContextType = {
    contacts: [
      {
        defaultName: "Siddhant",
        id: "1",
        number: 1234567890,
      },
      {
        defaultName: "Aila",
        id: "2",
        number: 1234567890,
      },
      {
        defaultName: "Je",
        id: "3",
        number: 1234567890,
      },
      {
        defaultName: "Ka",
        id: "4",
        number: 1234567890,
      },
      {
        defaultName: "HUa",
        id: "5",
        number: 1234567890,
      }
    ],
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
