import React from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { CurrentUserControllerType, CurrentUserType } from "./types";

export function CurrentUserController(props: CurrentUserControllerType) {
  const { children } = props;
  // fetch contact list here
  const contextValue: CurrentUserType = {
    name: "Siddhant",
    id: "1",
    number: 1234567890,
  };
  // setup context provider
  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
}
