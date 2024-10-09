import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect'; // Adjust path accordingly

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Establish a connection to MongoDB
  await dbConnect();

  // Test response
  res.status(200).json({ message: 'Connected to MongoDB!' });
}
