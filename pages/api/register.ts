import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";


type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { title, category, content } = req.body;

  try {
    // Create a new note
    const note = await prisma.note.create({
      data: {
        title: title,
        category: category,
        content: content,
      },
    });

    // Return success message
    if (note) {
      return res.status(201).json({ message: "Note registered successfully" });
    } else {
      return res.status(500).json({ message: "Failed to register note" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error, try again later" });
  }
}
