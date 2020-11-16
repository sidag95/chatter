import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import { NavigationScreen } from "../NavigationScreen/NavigationScreen";
import { Layout } from "../Layout/Layout";
import { MessageScreenContainer } from "../MessageScreen/MessageScreenContainer";
import { CurrentUserController } from "../CurrentUser/CurrentUserController";
import { ContactListController } from "../ContactList/ContactListController";

export function HomeScreen() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  return (
    <Box bgcolor="grey.400" width="100vw" height="100vh" overflow="hidden">
      <Layout>
        <CurrentUserController>
          <ContactListController>
            <NavigationScreen selectChat={setSelectedChatId} />
            <MessageScreenContainer chatId={selectedChatId} />
          </ContactListController>
        </CurrentUserController>
      </Layout>
    </Box>
  );
}
