import React, {useContext, useEffect} from "react";
import { Box, Card, CardContent, makeStyles } from "@material-ui/core"
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import {ChatScreenProps} from "../MessageScreen/types"
import { useChat } from "./useChat";

const useStyles = makeStyles(theme => ({
  container: {
    whiteSpace: "pre-wrap",
    padding: "16px",
    "&:last-child": {
      paddingBottom: "16px"
    }
  }
}))

export function ChatScreen(props: ChatScreenProps) {
  const { chatId } = props;
  const currentUser = useContext(CurrentUserContext);
  const { chat, populateMessages } = useChat({id: chatId, currentUserId: currentUser.id});
  const styles = useStyles()

  useEffect(() => {
    if (currentUser) {
      populateMessages()
    }
  }, [chatId]) // eslint-disable-line
  
  if (!currentUser) {
    // log error
    return (
      <Box display="flex" flex={1}>
        <Box m="auto">Current User is not defined, did you forget to call ContactListController ?</Box>
      </Box>
    )
  }

  // react window
  return (
    <Box flex={1} overflow="auto">
      {chat.map(message => {
        const isMessageFromCurrentUser = currentUser.id === message.authorId
        return (
        <Box key={message.id} width="100%" display="flex" justifyContent={isMessageFromCurrentUser ? "flex-end" : "flex-start"} >
          <Box width="fit-content" my={4} mx={6}>
            <Card>
              <CardContent className={styles.container}>
                {message.message}
              </CardContent>
            </Card>
          </Box>
        </Box>
      )
      })}
    </Box>
  )
}