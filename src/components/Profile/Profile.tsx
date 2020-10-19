import React from "react";
import { Box, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  }
}))

export function Profile() {
  const styles = useStyles();
  return (
    <Box className={styles.root} display="flex" px={3} py={2} height="56px" bgcolor="grey.200" >
      <div>
        <Avatar />
      </div>
    </Box>
  );
}
