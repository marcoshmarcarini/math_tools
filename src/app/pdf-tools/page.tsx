"use client"

import styles from '@/app/pdf-tools/Pdf.module.css'
import PDFMerge from '../components/pdfMerge/page'



export default function pdfTools(){

    return(
        <>
            <div className={styles.pdfToolsContent}>
                <div className={styles.content}>
                    <p className={styles.pdfTitle}>Juntar PDF</p>
                    <p>Escolha os arquivos que quer juntar e baixe em seu computador logo em seguida.</p>
                </div>
                <div className={styles.container}>
                    <PDFMerge />
                </div>
                
            </div>
        </>
    )
}