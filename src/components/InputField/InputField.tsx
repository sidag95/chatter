import React, {useContext, useState} from "react";
import {FormControl, FilledInput, makeStyles} from "@material-ui/core"
import { InputFieldProps } from "./types";
import { ChatContext } from "../ChatScreen/ChatContext";
import { MessageBody } from "../ChatScreen/types";

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
  const styles = useStyles()
  const [message, setMessage] = useState<string>("")
  const { sendMessage } = useContext(ChatContext)

  const handleSubmit = () => {
    const messageBody: MessageBody = { message, type: "string", authorId: "1" }
    setMessage("")
    sendMessage(messageBody)
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
              debugger;
              keyPressEvent.preventDefault();
              handleSubmit();
            }
          }
        }}
      />
    </FormControl>
  )
}