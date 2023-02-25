import type { FormattedPost } from "@types"
import * as React from "react"

interface GlobalContextProps {
  posts: FormattedPost[]
  setPosts: React.Dispatch<React.SetStateAction<FormattedPost[]>>
}

const DEFAULT_VALUE = {
  posts: [],
  setPosts: () => {}
}

export const GlobalContext =
  React.createContext<GlobalContextProps>(DEFAULT_VALUE)

export function GlobalProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [posts, setPosts] = React.useState<FormattedPost[]>([])

  const memoizedValue = React.useMemo(
    () => ({
      posts,
      setPosts
    }),
    [posts]
  )

  return (
    <GlobalContext.Provider value={memoizedValue}>
      {children}
    </GlobalContext.Provider>
  )
}
