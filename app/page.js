import Link from "next/link";

export default function Home () {

  const linkStyling = "hover:underline hover:text-green-500 text-2xl";

  return (
    <main className="flex flex-col text-center mt-10">
      <h1 className="text-green-300 text-4xl font-bold mb-10">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className={linkStyling}><Link href="/week-2" >Week 2 Assignment</Link></li>
        <li className={linkStyling}><Link href="/week-3" >Week 3 Assignment</Link></li>
        <li className={linkStyling}><Link href="/week-4" >Week 4 Assignment</Link></li>
        <li className={linkStyling}><Link href="/week-5" >Week 5 Assignment</Link></li>
        <li className={linkStyling}><Link href="/week-6" >Week 6 Assignment</Link></li>
      </ul>
    </main>
  );
}
