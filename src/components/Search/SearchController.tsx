import React from "react"
import { SearchContext } from "./SearchContext"
import { SearchControllerType } from "./types"

export function SearchController(props: SearchControllerType) {
  const {children} = props
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>
}