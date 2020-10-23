import React from "react";
import { Box } from "@material-ui/core"
import {MessageScreenProps} from "./types"
import { Profile } from "../Profile/Profile";
import { InputField } from "../InputField/InputField";
import { ChatScreen } from "../ChatScreen/ChatScreen";

export function MessageScreen(props: MessageScreenProps) {
  const { chatId } = props; 
  return (
    <Box display="flex" flexDirection="column" height={1}>
      <Profile />
      <ChatScreen chatId={chatId} />
      <InputField />
    </Box>
  )
}