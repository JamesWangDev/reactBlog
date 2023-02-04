import Image from "next/image"

export interface UserResponse {
  name: string
  username: string
  email: string
  // avatar_url: string
  website: string
}

export function AboutContent(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start mt-2">
      <div className="h-full min-w-fit flex flex-col items-center text-center justify-center mb-4 md:flex-row">
        <Image
          src="https://avatars.githubusercontent.com/u/85769241?v=4"
          alt="Avatar"
          width={120}
          height={120}
          className="rounded-full mr-4 my-4"
        />
        <div className="flex flex-col items-start justify-center text-center">
          <h2 className="text-xl font-bold text-black dark:text-white font-sans md:text-2xl capitalize">
            Paulo Ruan
          </h2>
          <h3 className="text-gray-600 dark:text-gray-400 font-normal text-sm justify-center text-center md:text-base capitalize">
            Full Stack Developer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-normal text-sm justify-center text-center md:text-base capitalize">
            Fortaleza - CE | Brazil
          </p>
        </div>
      </div>
      <p className="text-black dark:text-white font-normal text-sm flex justify-center text-start md:text-base">
        Welcome to my website! I use this to show some of my projects off, and
        test things out and sometimes write about in my blog. I&apos;m a full
        stack developer and based in Fortaleza, Brazil. I&apos;m also a huge fan
        of basketball. I&apos;m a huge fan of Linux, Open Source and technology
        in general. I&apos;m passionate about learning, running, music, orange
        juice and bad jokes.
        <br />
        <br />
        I&apos;m currently in my first year of Software Engineering at Ampli.
        I&apos;m looking for remote work opportunities as a Back-end or Full
        Stack developer.
      </p>
    </div>
  )
}
