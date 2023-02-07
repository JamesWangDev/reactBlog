import Image from "next/image"

export function AboutContent(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start mt-2">
      <div className="h-full min-w-fit flex flex-col items-center text-center justify-center mb-4 md:flex-row">
        <Image
          src="https://avatars.githubusercontent.com/u/85769241?v=4"
          alt="Foto de Paulo Ruan"
          width={120}
          height={120}
          blurDataURL="https://avatars.githubusercontent.com/u/85769241?v=4"
          placeholder="blur"
          className="rounded-full mr-4 my-4"
        />
        <div className="flex flex-col items-start justify-center text-center">
          <h2 className="text-xl font-bold text-black dark:text-white font-sans md:text-2xl capitalize">
            Paulo Ruan
          </h2>
          <h3 className="text-gray-600 dark:text-gray-400 font-normal text-sm justify-center text-center md:text-base capitalize">
            Desenvolvedor Full Stack
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-normal text-sm justify-center text-center md:text-base capitalize">
            Baturité/CE - Brasil
          </p>
        </div>
      </div>
      <p className="text-black dark:text-white font-normal text-sm flex justify-center text-start md:text-base">
        Bem-vindo ao meu site! Eu uso isso para mostrar alguns de meus projetos,
        testar algumas coisas e às vezes escrever sobre meu aprendizado ou sobre
        carreira no meu blog. Sou um desenvolvedor Full stack e atualmente moro
        no do interior do Ceará. Sou um entusiasta de Linux, Open Source e
        tecnologia em geral. Sou apaixonado por ensinar, aprender, correr, suco
        de laranja, música, e piadas sem graça. Também sou um grande fã de
        basquete.
        <br />
        <br />
        Atualmente estou no meu primeiro ano de Engenharia de Software na Ampli.
        Estou procurando oportunidades de trabalho remoto como desenvolvedor
        Front-end, Back-end ou Full Stack.
      </p>
    </div>
  )
}
