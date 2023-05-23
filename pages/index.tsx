import AddNote from "@/components/AddNote";
import Note from "@/components/Note";
import NoteItem from "@/components/NoteItem";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="container mx-auto mb-2 px-5 py-20">
        <AddNote />
        <div className="-m-4 flex flex-wrap">
          <NoteItem handleModalToggle={handleModalToggle} />
          <NoteItem handleModalToggle={handleModalToggle} />
          <NoteItem handleModalToggle={handleModalToggle} />
          <NoteItem handleModalToggle={handleModalToggle} />
          <NoteItem handleModalToggle={handleModalToggle} />
          <NoteItem handleModalToggle={handleModalToggle} />
          <NoteItem handleModalToggle={handleModalToggle} />
        </div>
        {showModal && <Note handleModalToggle={handleModalToggle} />}
      </div>
    </>
  );
}
