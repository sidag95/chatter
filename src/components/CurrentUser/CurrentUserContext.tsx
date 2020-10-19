import React from "react"
import { CurrentUserType } from "./types";

export const CurrentUserContext = React.createContext<CurrentUserType | null>(null);