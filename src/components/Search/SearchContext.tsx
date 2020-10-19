import React from "react";
import { SearchContextType } from "./types";

const defaultSearchValue: SearchContextType = {};

export const SearchContext = React.createContext<SearchContextType>(
  defaultSearchValue
);
