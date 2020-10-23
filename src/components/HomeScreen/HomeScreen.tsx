import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import { NavigationScreen } from "../NavigationScreen/NavigationScreen";
import { Layout } from "../Layout/Layout";
import { MessageScreenContainer } from "../MessageScreen/MessageScreenContainer";
import { CurrentUserController } from "../CurrentUser/CurrentUserController";
import { ContactListController } from "../ContactList/ContactListController";
import { ChatContextController } from "../ChatScreen/ChatContextController";

export function HomeScreen() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  return (
    <Box bgcolor="grey.400" width="100vw" height="100vh" overflow="hidden">
      <Layout>
        <CurrentUserController>
          <ContactListController>
            <ChatContextController>
              <NavigationScreen selectChat={setSelectedChatId} />
              <MessageScreenContainer chatId={selectedChatId} />
            </ChatContextController>
          </ContactListController>
        </CurrentUserController>
      </Layout>
    </Box>
  );
}
