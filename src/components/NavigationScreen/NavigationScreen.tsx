import React from "react";
import { Box, makeStyles } from '@material-ui/core';
import { ContactList } from "../ContactList/ContactList";
import { ContactListController } from "../ContactList/ContactListController";
import { Profile } from "../Profile/Profile";
import { ProfileController } from "../Profile/ProfileController";
import { Search } from "../Search/Search";
import { SearchController } from "../Search/SearchController";
import { NavigationScreenProps } from "./types";

const useContainerStyles = makeStyles(theme => ({
  root: {
    borderColor: theme.palette.grey[300]
  }
}))

export function NavigationScreen(props: NavigationScreenProps) {
  const containerStyles = useContainerStyles();
  return (
    <Box className={containerStyles.root} bgcolor="grey.300" width="550px" borderRight={1}>
      <ProfileController>
        <Profile />
      </ProfileController>
      <SearchController>
        <Search />
      </SearchController>
      <ContactListController>
        <ContactList {...props} />
      </ContactListController>
    </Box>
  );
}
