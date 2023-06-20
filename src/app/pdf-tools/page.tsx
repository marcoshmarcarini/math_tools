"use client"

import styles from '@/app/pdf-tools/Pdf.module.css'
import PDFMerge from '../components/pdfMerge/page'
//import PDFCreate from '../components/pdfToImage/page'
import PDFToImage from '../components/pdfToImage/page'



export default function pdfTools(){

    return(
        <>
            <div className={styles.pdfToolsContent}>
                <div className={styles.content}>
                    <p className={styles.pdfTitle}>Juntar PDF</p>
                    <p>Escolha os arquivos que quer juntar e baixe em seu computador logo em seguida.</p>
                </div>
                <div className={`flex flex-col gap-6 pb-5`}>
                    <PDFMerge />
                    <PDFToImage />
                </div>
                
            </div>
        </>
    )
}