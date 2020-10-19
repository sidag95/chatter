import React from "react";
import {Box, makeStyles} from "@material-ui/core"

const useTextStyles = makeStyles(theme => ({
  centered: {
    width: "fit-content",
    height: "fit-content",
    margin: "auto",
    fontSize: theme.typography.h5.fontSize
  },
}));

export function MessageLandingScreen() {
  const textStyles = useTextStyles();
  return (
    <Box display="flex" width={1} height={1} bgcolor="grey.200">
      <p className={textStyles.centered}>Select a chat from the list and continue your conversation.</p>
    </Box>
  )
}