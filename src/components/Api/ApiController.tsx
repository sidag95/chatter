import React from "react";
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { ApiControllerProps } from "./types";

const queryCache = new QueryCache()
 
export function ApiController(props: ApiControllerProps) {
   const {children} = props
   return (
     <ReactQueryCacheProvider queryCache={queryCache}>
       {children}
     </ReactQueryCacheProvider>
   )
}
 