"use client"

import { useState } from "react"

export default function ConversorTemp(){
    /* 
        A regra para converter temperatura de celcius para ferenheit é simples:
        
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
    const [celsius, setCelsius] = useState('')
    const [farenheit, setFarenheit] = useState('')
   

    if(celsius){

    }else{

    }

    const handleConvert = (e:any) => {
        e.preventDefault()
        
        console.log(celsius)
        console.log(farenheit)

        const temperatura = temp

        if(Number(temperatura) > 0){
            const c = Number(temp)
            const f = ((9 * c) + 160) / 5
            setConvert(convert + f)
        }else if(Number(temperatura) > 32){
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
                            <input type="radio" value={celsius} name="temp" id={`celsius`} onClick={(e:any) => setCelsius(e.target.value)}/>
                        </div>
                        <div className="flex gap-1">
                            <label htmlFor="temp">ºF</label>
                            <input type="radio" value={farenheit} name="temp" id={`farenheit`} onClick={(e:any) => setFarenheit(e.target.value)}/>
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