import Note from "@/components/Note";
import {} from "react-icons/";

export default function Home() {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 lg:w-1/4">
              <Note />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
