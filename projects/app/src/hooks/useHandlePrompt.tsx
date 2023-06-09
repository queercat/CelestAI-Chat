export const useHandlePrompt = () => {
  const request = async (prompt: string) => {
    const response = await fetch("localhost:5000/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ prompt }),
    })

    const data = await response.json()

    return data
  }

  return {
    request,
  }
}
