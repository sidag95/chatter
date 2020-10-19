import React from "react"
import { ProfileContext } from "./ProfileContext"
import { ProfileControllerType } from "./types"

export function ProfileController(props: ProfileControllerType) {
  const {children} = props
  return <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
}