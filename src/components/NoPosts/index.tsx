export function NoPosts(): JSX.Element {
  return (
    <div className="w-full min-h-[50vh] flex flex-col justify-around items-center">
      <h3 className="text-gray-600 dark:text-gray-400 font-sans my-1 font-bold text-lg md:text-xl">
        Nenhum post encontrado :(
      </h3>
    </div>
  )
}
