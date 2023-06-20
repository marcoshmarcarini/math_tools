import { fromPath } from 'pdf2pic';
import { tmpdir } from 'os';
import { join } from 'path';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Use o middleware body-parser para analisar o corpo da requisição como JSON
    jsonParser(req, res, async () => {
      const { file } = req.body;

      const options = {
        density: 100,
        saveFilename: 'untiled',
        savePath: join(tmpdir(), 'images'),
        format: 'png',
        width: 600,
        height: 600,
      };

      const storeAsImage = fromPath(file, options);
      const pageToConvertAsImage = 1;

      try {
        const result = await storeAsImage(pageToConvertAsImage);
        console.log('A primeira página foi convertida em uma imagem:', result);
        res.status(200).json({ success: true, result });
      } catch (error) {
        console.error('Erro ao converter PDF para imagem:', error);
        res.status(500).json({ success: false, error: 'Erro ao converter PDF para imagem' });
      }
    });
  } else {
    res.status(405).end('Método não permitido');
  }
}