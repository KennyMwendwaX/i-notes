import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { id } = req.query;

  try {
    // Delete the note from the database
    await prisma.note.delete({
      where: {
        id: String(id),
      },
    });

    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
