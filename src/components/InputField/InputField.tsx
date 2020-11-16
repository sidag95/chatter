import React, {useContext, useState} from "react";
import {FormControl, FilledInput, makeStyles} from "@material-ui/core"
import { InputFieldProps } from "./types";
import { MessageBody } from "../ChatScreen/types";
import { useChat } from "../ChatScreen/useChat";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";

const useStyles = makeStyles(theme => ({
  root: () => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    backgroundColor: theme.palette.grey[200],
    height: "48px",
  }),
  input: () => ({
    padding: "0 16px",
    height: "36px",
    margin: "auto",
    borderRadius: "9999px",
    border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: "white",
    width: "calc(100% - 96px)",
    overflow: "auto",
    "> textarea": {
      "&:focus": {
        backgroundColor: "white",
      },
      "&:hover": {
        backgroundColor: "white",
      }
    },
    "&:focus": {
      backgroundColor: "white",
    },
    "&:hover": {
      backgroundColor: "white",
    }
  }),
}));

export function InputField(props: InputFieldProps) {
  const { chatId } = props;
  const styles = useStyles();
  const currentUser = useContext(CurrentUserContext);
  const [message, setMessage] = useState<string>("")
  const { sendMessage } = useChat({id: chatId, currentUserId: currentUser.id})

  const handleSubmit = async () => {
    const messageBody: MessageBody = { message, type: "string", authorId: "1" }
    setMessage("")
    await sendMessage(chatId, messageBody)
  }


  return (
    <FormControl className={styles.root} variant="filled">
      <FilledInput
        value={message}
        disableUnderline
        multiline
        className={styles.input}
        id="component-filled"
        placeholder="Type a message"
        onChange={onChangeEvent => {
          setMessage(onChangeEvent.target.value)
        }}
        onKeyPress={keyPressEvent => {
          if (keyPressEvent.key === "Enter") {
            if (!keyPressEvent.shiftKey) {
              keyPressEvent.preventDefault();
              handleSubmit();
            }
          }
        }}
      />
    </FormControl>
  )
}