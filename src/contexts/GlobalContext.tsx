import React, { createContext, useMemo, useState } from "react"

import { PostFormatted } from "../pages/blog"

interface GlobalContextProps {
  posts: PostFormatted[]
  setPosts: React.Dispatch<React.SetStateAction<PostFormatted[]>>
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
  posts: [],
  setPosts: () => {},
  searchValue: "",
  setSearchValue: () => {}
}

export const GlobalContext = createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [posts, setPosts] = useState<PostFormatted[]>([])
  const [searchValue, setSearchValue] = useState<string>("")

  const memoizedValue = useMemo(
    () => ({
      posts,
      setPosts,
      searchValue,
      setSearchValue
    }),
    [posts, searchValue]
  )

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  )
}
