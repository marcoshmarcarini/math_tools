"use client"

import { useState } from "react"

export default function ConversorTemp(){
    /* 
        A regra para converter temperatura de celcius para ferenheit é simples:
        (C × 9/5) + 32 = F


        C -> F
        c / 5 = (f - 32) / 9
        c = (5*(f - 32)) / 9
        
        F -> C
        9*c = 5*f - 5 * 32
        5*f = 9*C + 160
        f = (9C + 160)/5
    */

    const [convert, setConvert] = useState('')
    const [temp, setTemp] = useState('')
    const [tipo, setTipo] = useState('')

    const handleConvert = (e:any) => {
        e.preventDefault()

        console.log(tipo)

        if(tipo === 'F'){
            const c = Number(temp)
            const f = ((c * 9) / 5) + 32
            setConvert(convert + f)
        }else if(tipo === 'C'){
            const f = Number(temp)
            const c = (5*(f - 32)) / 9
            setConvert(convert + c)
        }
    }

    return(
        <>
            <div className="flex h-screen items-center justify-center flex-col">
                <form onSubmit={handleConvert} className="flex flex-col gap-5 justify-center items-center">
                    <div className="flex gap-5">
                        <div className="flex gap-1">
                            <label htmlFor="temp">ºC</label>
                            <input type="radio" value={`C`} name="temp" id={`celsius`} onChange={(e:any) => setTipo(e.target.value)}/>
                        </div>
                        <div className="flex gap-1">
                            <label htmlFor="temp">ºF</label>
                            <input type="radio" value={`F`} name="temp" id={`farenheit`} onChange={(e:any) => setTipo(e.target.value)}/>
                        </div>
                    </div>
                    <input type="text" placeholder="Temperatura" onChange={(e:any) => setTemp(e.target.value)} />
                    <input type="submit" value={`Converter`} />
                </form>
                <div>{`${Number(convert)}`}</div>
            </div>
            
        </>
    )
}