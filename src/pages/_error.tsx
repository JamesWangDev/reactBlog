export default function Error({ statusCode }: { statusCode: number }) {
  return (
    <h1 className="h-screen w-screen flex items-center justify-center font-sans font-black">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </h1>
  )
}

Error.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
