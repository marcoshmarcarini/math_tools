import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <p className=" text-center flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Utilize as ferramentas sem moderação.<br/> Ainda em fase beta.
        </p>
      </div>

      <div className="flex gap-10 items-center justify-center flex-wrap">

        <div className="mb-5 mt-5 flex text-center justify-center items-center">
          <Link href={`/regra-de-3`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold flex items-center justify-center gap-3`}>
              <Image src={`https://img.icons8.com/pulsar-color/48/math.png`} width={48} height={48} alt={`Regra de 3`} />
              Regra de 3{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Utilize de maneira simples e intuitiva uma calculadora de Regra de 3.
            </p>
          </Link>
        </div>

        <div className="mb-5 mt-5 flex text-center justify-center items-center">
          
          <Link href={`/conversor-de-temperatura`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold flex items-center justify-center gap-3`}>
              <Image src={`https://img.icons8.com/pulsar-color/48/temperature.png`} width={48} height={48} alt={`Conversor de Temperatura`} />
              Conversor de <br/> Temperatura{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Converta de forma simples valores de temperatura de Celsius para Farenheit.
            </p>
          </Link>
        </div>

        <div className="mb-5 mt-5 flex text-center justify-center items-center">
          <Link href={`/pdf-tools`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold flex items-center justify-center gap-3`}>
              <Image src={`https://img.icons8.com/pulsar-color/48/pdf-2.png`} width={48} height={48} alt={`Mesclar PDF`} />
              Mesclar <br/> PDF{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Junte seus arquivos PDF em um único arquivo.
            </p>
          </Link>
        </div>
      </div>

      <div 
        className="flex h-48 w-full items-end justify-center 
        bg-gradient-to-t from-white via-white dark:from-chumbo dark:via-ferro lg:static lg:h-auto lg:w-auto lg:bg-none"
        >
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  )
}
