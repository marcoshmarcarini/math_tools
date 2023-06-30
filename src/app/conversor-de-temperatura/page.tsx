"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from '@/app/regra-de-3/Regra.module.css'
import stylesPage from '@/app/conversor-de-temperatura/Conversor.module.css'

export default function ConversorTemp(){
    /* 
        A regra para converter temperatura de celcius para ferenheit é simples:
        (C × 9/5) + 32 = F
        9C/5 + 32 = F
        9C/5 = F - 32
        C/5 = (F - 32) / 9
        9C = 5(F - 32)
        C = (5(F - 32))/9

        C -> F
        c / 5 = (f - 32) / 9
        c = (5*(f - 32)) / 9
        
        F -> C
        9*c = 5*f - 5 * 32
        5*f = 9*C + 160
        f = (9C + 160)/5

        K -> C
        10 K − 273,15 = -263,1 °C

        K -> F
        (10 K − 273,15) × 9/5 + 32 = -441,7 °F

        F -> k
        (K - 273.15) * (9/5) + 32 = F
        (F − 32) × 5/9 + 273,15 = K


    */

    const [convert, setConvert] = useState('')
    const [temp, setTemp] = useState('')
    const [tipoUm, setTipoUm] = useState(0)
    const [tipoDois, setTipoDois] = useState(0)

    const handleConvert = (e:any) => {
        e.preventDefault()

        var c = 0
        var f = 0
        var k = 0

        switch(tipoUm != 0 && tipoDois != 0){
            
            case tipoUm === 1 && tipoDois === 2 :
                c = Number(temp)
                f = ((c * 9) / 5) + 32
                setConvert(convert + f)
            
            case tipoUm === 1 && tipoDois === 3 :
                c = Number(temp)
                k = c + 273.0
                setConvert(convert + k)

            case tipoUm === 2 && tipoDois === 1 : 
                f = Number(temp)
                c = (5*(f - 32)) / 9
                setConvert(convert + c)
                
            case tipoUm === 2 && tipoDois === 3 :
                f = Number(temp)
                k = (((f - 32) * 5)/9) + 273.15
                setConvert(convert + k)

        }
    }

    const handleReset = () =>{
        setConvert('')
        setTemp('')
        setTipoUm(0)
        setTipoDois(0)
    }

    return(
        <>
            <div className="flex h-screen items-center justify-center flex-col">
                <form onSubmit={handleConvert} className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1">
                            {/*<label htmlFor="temp">ºC</label>*/}
                            {/*<input type="radio" value={`C`} name="temp" id={`celsius`} onChange={(e:any) => setTipo(e.target.value)}/>*/}
                            <input type="text" placeholder="Temperatura" value={temp} onChange={(e:any) => setTemp(e.target.value)} />
                            <select name="TempInicial" id="TemInicial">
                                <option value={1} onChange={(e:any) => setTipoUm(e.target.value)} selected>Graus Celcius</option>
                                <option value={2} onChange={(e:any) => setTipoUm(e.target.value)}>Graus Farenheit</option>
                                <option value={3} onChange={(e:any) => setTipoUm(e.target.value)}>Graus Kelvin</option>
                            </select>
                        </div>
                        <div className="flex gap-1">
                            <Image src={`https://img.icons8.com/ios-filled/0097e6/50/arrow.png`} width={48} height={48} alt={`De -> Para`}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            {/*<label htmlFor="temp">ºF</label>*/}
                            {/*<input type="radio" value={`F`} name="temp" id={`farenheit`} onChange={(e:any) => setTipo(e.target.value)}/>*/}
                            <input type="text" value={
                                tipoUm === 1 && tipoDois === 2 ? 
                                `${Number(convert).toFixed(2).replace('.', ',')} ºF` : 
                                    `${Number(convert).toFixed(2).replace('.', ',')} ºC`
                            } />
                            <select name="TempFinal" id="TempInicial">
                                <option value={1} onChange={(e:any) => setTipoDois(e.target.value)}>Graus Celcius</option>
                                <option value={2} onChange={(e:any) => setTipoDois(e.target.value)} selected>Graus Farenheit</option>
                                <option value={3} onChange={(e:any) => setTipoDois(e.target.value)}>Graus Kelvin</option>
                            </select>
                        </div>
                    </div>
                    
                    <input type="submit" value={`Converter`} className={stylesPage.btnConvert} />
                </form>
                
                <button onClick={handleReset} className={`mt-5 ${styles.btnReset}`}>
                    <Image 
                        src={`https://img.icons8.com/ios/30/ffffff/update-left-rotation.png`} 
                        width={30} 
                        height={30} 
                        alt={`Restart`}
                    />
                </button>

                <div className="flex align-items-center text-center lg:mb-0 lg:grid-cols-4 lg:text-left mt-5">
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
            </div>
            
            
        </>
    )
}