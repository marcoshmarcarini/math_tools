"use client"

import styles from '@/app/pdf-tools/Pdf.module.css'
import PDFMerge from '../components/pdfMerge/page'
import Link from 'next/link'


export default function pdfTools(){
    const p1 = `O formato de arquivo PDF, que significa "Portable Document Format" (Formato de Documento Portátil, em tradução livre), é amplamente  utilizado para a distribuição de documentos eletrônicos. Ele foi desenvolvido pela Adobe Systems nos anos 1990 e se tornou um padrão  aberto, permitindo que diferentes softwares e sistemas operacionais  possam criar, visualizar e imprimir arquivos PDF. `
    const p2 = `Um arquivo PDF contém tanto o layout quanto o conteúdo do documento de origem, independentemente do software, hardware ou sistema operacional em que foi criado. Isso significa que um arquivo PDF mantém a formatação original, como fontes, imagens, gráficos e cores, independentemente de como ele é visualizado.`
    const p3 = `Uma das principais vantagens do formato PDF é a sua portabilidade. Os arquivos PDF podem ser abertos e exibidos em praticamente qualquer dispositivo com suporte a PDF, como computadores, tablets e smartphones, independentemente do sistema operacional utilizado. Além disso, os arquivos PDF são compactos, o que os torna fáceis de serem compartilhados e enviados por e-mail ou carregados em sites.`
    const p4 = `Outra característica importante do formato PDF é a capacidade de proteger e preservar a integridade dos documentos. É possível adicionar senhas para restringir o acesso ao conteúdo, assim como criptografar arquivos PDF para garantir a segurança dos dados. Além disso, os arquivos PDF podem conter assinaturas digitais, o que ajuda a verificar a autenticidade e a integridade do documento.`
    const p5 = `Além da visualização e impressão, os arquivos PDF podem incluir recursos interativos, como hiperlinks, botões, formulários preenchíveis e multimídia incorporada. Esses recursos permitem que os usuários interajam com o conteúdo do documento, facilitando a navegação e a pesquisa de informações específicas.`
    const p6 = `Em resumo, o arquivo PDF é um formato versátil e amplamente utilizado para a distribuição de documentos eletrônicos. Ele preserva a formatação original do documento, é portátil e pode ser visualizado em diferentes dispositivos e sistemas operacionais. Além disso, oferece recursos de segurança e interatividade, tornando-o uma escolha popular para compartilhar e arquivar informações importantes.`


    return(
        <>
            <div className={`${styles.pdfToolsContent}`}>
                <div className={styles.content}>
                    <p className={styles.pdfTitle}>Juntar PDF</p>
                    <p>Escolha os arquivos que quer juntar e baixe em seu computador logo em seguida.</p>
                </div>
                <div className={`flex ${styles.arquivo}`}>
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
            <div className={`${styles.pdfTctContent}`}>
                <h2 className={` flex justify-center ${styles.pdfTitle}`}>Entendendo o PDF</h2>
                <p className={`${styles.ptxt}`}>{p1}</p>
                <p className={`${styles.ptxt}`}>{p2}</p>
                <p className={`${styles.ptxt}`}>{p3}</p>
                <p className={`${styles.ptxt}`}>{p4}</p>
                <p className={`${styles.ptxt}`}>{p5}</p>
                <p className={`${styles.ptxt}`}>{p6}</p>
            </div>
        </>
    )
}