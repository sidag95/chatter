import React from "react";
import { SvgIcon, Box, Input, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  container: {
  },
  input: {
    height: "32px",
    margin: "auto",
    width: "100%",
    paddingRight: "16px"
  }
}))

export function Search() {
  const styles = useStyles();
  return (
    <Box py="2" px="3" height={64} bgcolor="grey.200" display="flex" >
      <Box bgcolor="white" display="flex" m="auto" width="calc(100% - 16px)" borderRadius={24}>
        <Box my="auto" width={56} pl={4} pt={1} height={32}>
          <SvgIcon component={SearchIcon} color="disabled" />
        </Box>
        <Input className={styles.input} disableUnderline id="input-with-icon-grid" placeholder="Search for a chat" />
      </Box>
    </Box>
  );
}
 