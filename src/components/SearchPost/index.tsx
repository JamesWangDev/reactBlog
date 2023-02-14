import * as React from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { ImSearch } from "react-icons/im"

export function SearchPost(): JSX.Element {
  const { setSearchValue, searchValue } = React.useContext(GlobalContext)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchValue(value)
  }

  return (
    <div className="max-w-96 h-10 flex flex-row flex-nowrap items-center justify-start my-2 py-2 pr-2 border-b border-gray-600 dark:border-gray-400">
      <input
        type="search"
        className="w-full h-full focus:outline-none bg-transparent text-black dark:text-white placeholder:italic placeholder:text-gray-400 dark:placeholder:text-gray-500"
        onChange={(event) => handleSearch(event)}
        placeholder="Buscar post"
        value={searchValue}
      />
      <ImSearch className="w-6 h-6 ml-2 text-gray-600 dark:text-gray-400" />
    </div>
  )
}
