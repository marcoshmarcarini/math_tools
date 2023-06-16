/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import styles from '@/app/regra-de-3/Regra.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { SetStateAction, useEffect, useState } from 'react'




export default function regraDe3(){
    const [resultado, setResultado] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)

    const handleRegradeTres = (e:any) =>{
            e.preventDefault()
            var res = ((num2 * num3)/num1)
            console.log(res)
            setResultado(resultado + res)
    }

    const handleReset = () =>{
        setResultado('')
        setNum1(0)
        setNum2(0)
        setNum3(0)
    }

    
    return(
        <>
            <div className={styles.regraArea}>
                <h3 className={`${styles.regraTitulo} dark:text-white`}>Regra de 3</h3>
                <form className={styles.formulario} onSubmit={handleRegradeTres}>
                    <div className={styles.formRegra}>
                        <input 
                            type="text"
                            placeholder={`0`} 
                            name='num1' 
                            value={num1} 
                            onChange={(e:any) => setNum1(e.target.value) } 
                            className={`dark:text-preto`}
                        />
                        <div className={`${styles.estaPara} `}><p>Está Para</p></div>
                        <input 
                            type="text" 
                            placeholder={`0`} 
                            name='num2' 
                            value={num2} 
                            onChange={(e:any) => setNum2(e.target.value) }
                            className={`dark:text-preto`}
                        />
                    </div>
                    <div className={styles.formRegra}>
                        <input 
                            type="text" 
                            placeholder={`0`} 
                            name='num3' 
                            value={num3} 
                            onChange={(e:any) => setNum3(e.target.value) }
                            className={`dark:text-preto`}
                        />
                        <div className={styles.estaPara}><p>Está Para</p></div>
                        <input 
                            type="text" 
                            placeholder={`0`} 
                            name='num4' 
                            value={resultado} 
                            readOnly
                            className={`dark:text-preto`}
                        />
                    </div>
                    <div className={styles.formRegra}>
                        <input type="submit" value={`Calcular`} />
                    </div>
                </form>
                <div 
                    className={
                        Number(resultado) > 0 ? 
                            `${styles.resultado}` : 
                                `${styles.resultadoHidden}`
                    }
                >
                    {`${resultado}%`}
                </div>
                <button onClick={handleReset} className={styles.btnReset}>
                    <Image 
                        src={`https://img.icons8.com/ios/30/ffffff/update-left-rotation.png`} 
                        width={30} 
                        height={30} 
                        alt={`Restart`}
                    />
                </button>

                <div className=" flex align-items-center text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <Link href={`/`}
                    className="group rounded-lg border border-transparent px-4 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    rel="noopener noreferrer"
                    >
                    <h2 className={` text-2xl font-semibold`}>
                        Voltar{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Retornar.
                    </p> */}
                    </Link>
                </div>
                <div className={styles.RegraTextosArea}>
                    <h2>Explicando a Regra de Três</h2>
                    <p>
                        Imagine que você tem uma caixa de balas e quer dividir igualmente com seus
                        dois amigos. Se você tem 12 balas, você pode dar 6 para cada amigo. Isso é 
                        fácil de entender, certo?
                    </p>
                    <p>
                        A regra de três é um pouco parecida com isso, mas com números diferentes. 
                        Ela nos ajuda a descobrir quantas coisas temos quando sabemos a quantidade 
                        de outras coisas.
                    </p>
                    <p>
                        Vou dar um exemplo para ficar mais claro. Imagine que você está em uma loja 
                        e quer comprar 3 brinquedos que custam R$15,00 cada. Você quer saber quanto 
                        vai custar no total.
                    </p>
                    <p>
                        Aqui está a regra de três simples: <br/>
                        Se 1 briquedo custa R$15, então 3 brinquedos vão custar o quê?
                    </p>
                    <p>
                        Para resolve isso, vamos fazer uma conta bem fácil. Vamos multiplicar o número 
                        de brinquedos pelo preço de cada brinquedo: <br />
                        3 (brinquedos) X R$15 (preço de cada brinquedo) = R$45 (total)
                    </p>
                    <p>
                        A regra de três pode ser usada em muitas situações diferentes, não só para 
                        comprar brinquedos. Ela nos ajuda a descobrir quantas coisas temos ou precisamos 
                        quado conhecemos outras quantidades. É uma ferramenta matemática muito útil!
                    </p>
                </div>
            </div>
        </>
    )
}