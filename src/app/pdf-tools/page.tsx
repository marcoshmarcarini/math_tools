"use client"

import styles from '@/app/pdf-tools/Pdf.module.css'
import PDFMerge from '../components/pdfMerge/page'
import Link from 'next/link'


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
                </div>
                <div className=" flex align-items-center justify-center text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
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
                    </Link>
                </div>
            </div>
        </>
    )
}