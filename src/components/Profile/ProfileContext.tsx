import React from "react";
import { ProfileContextType } from "./types";

const defaultProfileValue: ProfileContextType = {};

export const ProfileContext = React.createContext<ProfileContextType>(
  defaultProfileValue
);
