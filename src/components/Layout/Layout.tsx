import React from "react"
import Box from '@material-ui/core/Box';
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box py={4} height="100vh">
      <Box
        display="flex"
        width="100%"
        mx="auto"
        my="auto"
        height={1}
        boxShadow="0 1px 1px 0 rgba(var(--shadow-rgb),.06),0 2px 5px 0 rgba(var(--shadow-rgb),.2)"
        maxWidth="1280px"
        bgcolor="white"
      >
        {children}
      </Box>
    </Box>
  );
}
