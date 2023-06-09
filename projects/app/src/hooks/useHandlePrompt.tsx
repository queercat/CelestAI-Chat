export const useHandlePrompt = () => {
  const request = async (prompt: string) => {
    const response = await fetch("https://celestai-ass.fly.dev/chat/", {
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
