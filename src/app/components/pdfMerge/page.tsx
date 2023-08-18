import React, { ChangeEvent, useState } from 'react';
import styles from '@/app/components/pdfMerge/pdfMerge.module.css';

const PDFMerge: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const mergePDFsAndHTMLs = async (pdfFiles: FileList, docFiles: FileList) => {
    const formData = new FormData();

    // Adicione os arquivos PDF à solicitação
    for (const file of Array.from(pdfFiles)) {
      formData.append('file', file);
    }

    // Extraia o HTML dos arquivos DOC e DOCX e adicione à solicitação
    for (const file of Array.from(docFiles)) {
      const html = await convertDocToHtml(file);
      formData.append('html', html);
    }

    try {
      const response = await fetch('/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to convert files');
      }

      const pdfBlob = await response.blob();

      const url = URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged.pdf';
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to convert files:', error);
    }
  };

  const convertDocToHtml = async (file: File): Promise<string> => {
    const reader = new FileReader();
    reader.readAsText(file);

    return new Promise<string>((resolve, reject) => {
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const html = event.target.result.toString();
          console.log('HTML:', html); // Adicione este console.log para verificar o HTML extraído
          resolve(html);
        } else {
          reject(new Error('Failed to extract HTML from file'));
        }
      };
    });
  };

  const createCustomFileList = (files: File[]): FileList => {
    const dataTransfer = new DataTransfer();

    for (const file of files) {
      dataTransfer.items.add(file);
    }

    return dataTransfer.files;
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const pdfFiles = Array.from(files).filter(
        (file) => file.type === 'application/pdf'
      );
      const docFiles = Array.from(files).filter(
        (file) =>
          file.type === 'application/msword' ||
          file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      );

      setSelectedFiles(files);
      mergePDFsAndHTMLs(
        createCustomFileList(pdfFiles),
        createCustomFileList(docFiles)
      );
    }
  };

  return (
    <>
      <div className={styles.pdfContent}>
        <label htmlFor={`arquivo`} className={styles.labelInput}>
          Enviar Arquivo
        </label>
        <input type="file" multiple onChange={handleFileChange} id={`arquivo`} />
      </div>
      <iframe
        title="PDF Preview"
        src=""
        width="100%"
        height="500"
      ></iframe>
    </>
  );
};

export default PDFMerge;