"use client"

import { useState } from 'react';
//import {fromPath} from "pdf2pic";

export default async function PDFToImage(){
    
    const [file, setFile] = useState<File | null>(null); 

    const handleConvertPDF = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if(!file){
            console.error('Nenhum arquivo selecionado')
            return
        }

        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await fetch('http://localhost:3000/pdf-to-image', {
                method: 'POST',
                body: formData,
            })

            if(response.ok){
                const data = await response.json()
                console.log('Imagem convertida:', data.result)
            }else{
                console.error('Erro ao converter PDF para imagem:', response.statusText)
            }
        } catch (error) {
            console.error('Erro ao converter PDF para imagem:', error)
        } 
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            setFile(e.target.files[0])
        }
    }

    
    return(
        <>
            <div className={`flex flex-col mt-10 justify-center items-center`}>
                <p>PDF para PNG</p>
                <form onSubmit={handleConvertPDF}>
                    <input type='file' onChange={handleFileChange}/>
                    <input type='submit' value={`Converter`} />
                </form>
            </div>
            
        </>
    )
}