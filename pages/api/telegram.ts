import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN не задан в переменных окружения');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request:', req.body);

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { message } = req.body;

  if (!message || !message.chat || !message.chat.id) {
    console.error('Invalid message format:', req.body);
    return res.status(400).json({ error: 'Invalid request format' });
  }

  const chatId = message.chat.id;
  const text = 'Привет от вашего бота!';

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    const data = await response.json();
    console.log('Telegram response:', data);

    if (!data.ok) {
      console.error('Error sending message:', data.description);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
