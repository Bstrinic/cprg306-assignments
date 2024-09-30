import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-between p-24">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-4xl mb-5">CPRG 306 - Web Development 2 - Assignments</h1>
      </div>

      <ul>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-2/">Week 2 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-3/">Week 3 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-4/">Week 4 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-5">Week 5 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-6/">Week 6 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-7/">Week 7 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-8/">Week 8 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-9/">Week 9 Assignment</Link></li>
        <li className="hover:text-green-500 hover:underline mb-2 font-bold"><Link href="./week-10/">Week 10 Assignment</Link></li>
      </ul>
    </main>
  );
}
