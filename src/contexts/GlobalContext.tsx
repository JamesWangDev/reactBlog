import * as React from "react"
import { FormattedPost } from "../../@types/global"

interface GlobalContextProps {
  posts: FormattedPost[]
  setPosts: React.Dispatch<React.SetStateAction<FormattedPost[]>>
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
  posts: [],
  setPosts: () => {},
  searchValue: "",
  setSearchValue: () => {}
}

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [posts, setPosts] = React.useState<FormattedPost[]>([])
  const [searchValue, setSearchValue] = React.useState<string>("")

  const memoizedValue = React.useMemo(
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
