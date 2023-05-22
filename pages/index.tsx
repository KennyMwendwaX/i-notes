import AddNote from "@/components/AddNote";
import NoteItem from "@/components/NoteItem";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mb-2 px-5 py-20">
        <AddNote />
        <div className="-m-4 flex flex-wrap">
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
          <NoteItem />
        </div>
      </div>
    </>
  );
}
