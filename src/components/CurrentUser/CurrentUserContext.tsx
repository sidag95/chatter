import React from "react"
import { CurrentUserType } from "./types";

export const CurrentUserContext = React.createContext<CurrentUserType>({
    name: "Siddhant",
    id: "1",
    number: 1234567890,
  });