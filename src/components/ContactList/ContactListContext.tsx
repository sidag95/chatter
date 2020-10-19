import React from "react";
import { ContactListContextType } from "./types";

const defaultContactListValue: ContactListContextType = {
  // hard code contact list for starters
  contacts: [],
  isLoading: false,
  hasLoaded: false,
  error: null
};

export const ContactListContext = React.createContext<ContactListContextType>(
  defaultContactListValue
);
