import AddNote from "@/components/AddNote";
import Note from "@/components/Note";
import NoteItem from "@/components/NoteItem";
import { useEffect, useState } from "react";

type Note = {
  id: string;
  title: string;
  category: string;
  content: string;
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("/api/notes");
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  return (
    <>
      <div className="container mx-auto mb-2 px-5 py-20">
        <AddNote fetchNotes={fetchNotes} />
        <div className="-m-4 flex flex-wrap">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              handleModalToggle={handleModalToggle}
            />
          ))}
        </div>
        {showModal && <Note handleModalToggle={handleModalToggle} />}
      </div>
    </>
  );
}
