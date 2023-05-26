import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { id } = req.query;
  const { title, category, content } = req.body;

  try {
    // Update the note in the database
    const updatedNote = await prisma.note.update({
      where: { id: String(id) },
      data: {
        title,
        category,
        content,
      },
    });

    if (updatedNote) return res.status(200).json({ message: "Note Updated" });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
