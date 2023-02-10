import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

export function SearchPost(): JSX.Element {
  const { setSearchValue, searchValue } = useContext(GlobalContext)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchValue(value)
  }

  return (
    <div className="w-full h-full flex flex-row flex-nowrap items-center justify-start my-2 py-1">
      <input
        type="search"
        className="min-w-[50%] h-10 px-2 focus:outline-none bg-transparent border rounded-sm border-gray-600 dark:border-gray-400"
        onChange={(event) => handleSearch(event)}
        placeholder="Buscar post"
        value={searchValue}
      />
    </div>
  )
}
