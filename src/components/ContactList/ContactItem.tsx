import React from "react";
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContactItemProps } from "./types";

const useStyles = makeStyles(theme => ({
  root: {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    }
  },
}));

export function ContactItem(props: ContactItemProps) {
  const { contact, selectChat } = props;
  const styles = useStyles();
  return (
    <Box className={styles.root} display="flex" height={64} py={2} px={3} borderColor="grey.200" bgcolor="white" onClick={() => {selectChat(contact.id)}}>
      <Box my="auto">
        <Avatar />
      </Box>
      <Box px={3} my="auto">
        {contact.defaultName}
      </Box>
    </Box>
  )
}