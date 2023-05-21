import AddNote from "@/components/AddNote";
import Note from "@/components/Note";

export default function Home() {
  return (
    <>
      <div className="text-gray-600">
        <div className="container mx-auto mb-2 px-5 py-20">
          <AddNote />
          <div className="-m-4 flex flex-wrap">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
      </div>
    </>
  );
}
