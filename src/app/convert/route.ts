import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { PDFDocument } from 'pdf-lib';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/convert', async (req: Request, res: Response) => {
  try {
    const { html } = req.body;

    // Criar um novo documento PDF
    const pdfDoc = await PDFDocument.create();

    // Incorporar o conteúdo HTML no documento PDF
    const page = pdfDoc.addPage();
    await page.setContent(html);

    // Salvar o documento PDF em um buffer
    const pdfBytes = await pdfDoc.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="converted.pdf"');
    res.send(pdfBytes);
  } catch (error) {
    console.error('Failed to convert HTML to PDF:', error);
    res.status(500).send('Failed to convert HTML to PDF');
  }
});

const server = app.listen(0, () => {
  const address = server.address();
  if (address && typeof address !== 'string') {
    const port = address.port;
    console.log(`Servidor rodando na porta ${port}`);
  }
});

export default server;