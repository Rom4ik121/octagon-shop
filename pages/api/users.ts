import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  // Ваш код для работы с базой данных

  res.status(200).json({ message: 'Успешное подключение к базе данных' })
} 