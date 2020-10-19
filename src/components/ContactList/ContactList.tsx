import React, {useContext} from "react";
import Box from '@material-ui/core/Box';
import { ContactItem } from "./ContactItem";
import { ContactListContext } from "./ContactListContext";
import { ContactListProps } from "./types";

export function ContactList(props: ContactListProps) {
  const { selectChat } = props;
  const { contacts, isLoading, hasLoaded, error } = useContext(ContactListContext);
  return (
    <Box p="3" height={1}>
      {isLoading ? <div>Loading</div> : false}
      {hasLoaded && contacts && contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} selectChat={selectChat} />
      ))}
      {error && <div>error</div>}
    </Box>
  );
}
