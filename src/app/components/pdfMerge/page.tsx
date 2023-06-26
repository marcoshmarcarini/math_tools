"use client"

import React, { ChangeEvent, useState } from 'react';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import Link from 'next/link';
import styles from '@/app/components/pdfMerge/pdfMerge.module.css';

const PDFMerge: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const mergePDFs = async (files: FileList) => {
    const mergedPdf = await PDFDocument.create();

    for (const file of Array.from(files)) {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      pages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    const pdfBytes = await mergedPdf.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'merged.pdf';
    link.click();

    URL.revokeObjectURL(url);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
      mergePDFs(files);
    }
  };

  return (
    <>
      <div className={styles.pdfContent}>
        <label htmlFor={`arquivo`} className={styles.labelInput}>Enviar Arquivo</label>
        <input type="file" multiple onChange={handleFileChange} id={`arquivo`} />
      </div>
    </>
  );
};

export default PDFMerge;