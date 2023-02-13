import Image from "next/image"
import { MdLocationOn, MdWork } from "react-icons/md"

export function AboutContent(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start mt-2">
      <div className="h-full min-w-fit flex flex-col text-center justify-center items-start md:items-center mb-4 md:flex-row">
        <Image
          src="https://avatars.githubusercontent.com/u/85769241?v=4"
          alt="Foto de Paulo Ruan"
          width={120}
          height={120}
          className="rounded-full md:mr-4 my-4"
        />
        <div className="flex flex-col items-start justify-center text-center">
          <h3 className="text-3xl font-bold text-black dark:text-white font-sans capitalize">
            Paulo Ruan
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-normal text-sm w-44 flex justify-start items-center text-center md:text-base capitalize py-1">
            <MdWork className="mr-1" />
            Open Source
          </p>
          <p className="text-gray-600 dark:text-gray-400 font-normal text-sm w-44 flex justify-start items-center text-center md:text-base capitalize py-1">
            <MdLocationOn className="mr-1" />
            Baturité/CE - Brasil
          </p>
        </div>
      </div>
      <p className="text-black dark:text-white font-normal flex justify-center text-start">
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
