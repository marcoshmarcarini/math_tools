import { NextApiRequest, NextApiResponse } from 'next';
import { fromPath } from 'pdf2pic';
import { tmpdir } from 'os';
import { join } from 'path';

export async function convertPDFToImage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { file } = req.body;

    const options = {
      density: 100,
      saveFilename: 'untiled',
      savePath: join(tmpdir(), 'images'), // Certifique-se de que a pasta "images" existe dentro da pasta de arquivos temporários
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
  } else {
    res.status(405).end('Método não permitido');
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return convertPDFToImage(req, res);
}