export const ADD_HASH = "ADD_HASH"
export const ADD_SELECTED_CONTENT = "ADD_SELECTED_CONTENT"

export const addHash = (hash: string) => ({
  type: ADD_HASH,
  hash,
})

export const addSelectedContent = (content: any) => ({
  type: ADD_SELECTED_CONTENT,
  content,
})
