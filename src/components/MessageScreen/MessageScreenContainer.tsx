import React from "react";
import {Box} from "@material-ui/core"
import { MessageScreenContainerProps } from "./types";
import { MessageLandingScreen } from "./MessageLandingScreen";
import { MessageScreen } from "./MessageScreen";

export function MessageScreenContainer(props: MessageScreenContainerProps) {
  const { chatId } = props;
  return (
    <Box bgcolor="grey.100" width={1}>
      {chatId ? (
        <MessageScreen chatId={chatId} />
      ) : (
          <MessageLandingScreen />
      )}
    </Box>
  );
}
