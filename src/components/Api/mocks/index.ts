import { LoremIpsum } from "lorem-ipsum";
import { Contact } from "../../ContactList/types";
import { MessageList } from "../../ChatScreen/types";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 3
  },
  wordsPerSentence: {
    max: 6,
    min: 3
  }
});

export const defaultContactNames: Array<string> = ["Siddhant", "Sid", "Al", "Kimberly", "Nehal", "Ashley", "Ishika", "Ashish"];

export const getDefaultContactList = () : Array<Contact> => {
  return defaultContactNames.map((name: string, index: number) => ({
    defaultName: name,
    id: `${index + 1}`,
    number: 1234567890
  }));
}

export const getDefaultChatMessages = (contactId: string, cursor: number): MessageList => {
  const returnValues = Array.from({ length: 5 }, (_, index) => {
    const message = {
      authorId: contactId,
      message: lorem.generateSentences(index * 2),
      type: "string"
    }
    if (index % 2 === 0) {
      return {
        ...message,
        id: `${index + 1}`,  
      }
    }

    return {
      ...message,
      id: `${index + 1}`
    }
  })
  return returnValues
}