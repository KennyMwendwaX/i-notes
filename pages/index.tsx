import AddNote from "@/components/AddNote";
import EditNote from "@/components/EditNote";
import Note from "@/components/Note";
import NoteItem from "@/components/NoteItem";
import { useEffect, useState } from "react";

interface Note {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt: number;
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleNoteModalToggle = (note: Note) => {
    setSelectedNote(note);
    setShowModal(!showModal);
  };

  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("/api/notes");
      const data = await response.json();
      // Sort notes by createdAt in descending order
      const sortedNotes: Note[] = data.sort(
        (a: Note, b: Note) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setNotes(sortedNotes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  const handleDeleteNote = async (id: string) => {
    try {
      await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
      fetchNotes(); // Fetch the updated list of notes after deletion
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto mb-2 px-5 py-20">
        <AddNote fetchNotes={fetchNotes} />
        <div className="-m-4 flex flex-wrap">
          {notes.length > 0 ? (
            notes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                handleNoteModalToggle={handleNoteModalToggle}
              />
            ))
          ) : (
            <div className="ml-4 pt-2">
              No notes available, click the Add Notes button to add a note.
            </div>
          )}
        </div>
        {selectedNote && showModal === true && (
          <Note
            note={selectedNote}
            handleNoteModalToggle={handleNoteModalToggle}
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            handleDeleteNote={handleDeleteNote}
          />
        )}
        {selectedNote && showEditModal === true && (
          <EditNote
            fetchNotes={fetchNotes}
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
            note={selectedNote}
          />
        )}
      </div>
    </>
  );
}
