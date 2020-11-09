import { getDefaultChatMessages } from "./mocks"

export function useRestApi() {
  const getChat = async (id: string, cursor: number) => {
    try {
      // await data
      await new Promise((resolve) => { setTimeout(resolve, 300) }) // fake request
      return getDefaultChatMessages(id, cursor)
      // unset isLoading
    } catch (error) {
      console.error(error)
      return []
    }
  }

  return {getChat}
}