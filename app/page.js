import Link from "next/link";

export default function Home () {
  return (
    <main class="text-center mt-20">
      <h1 class="text-green-300 text-4xl font-bold mb-7">CPRG 306: Web Development 2 - Assignments</h1>
      <div class="hover:underline hover:text-green-500 text-2xl">
        <Link href="/week-2" >Week 2 Assignment</Link>
      </div>
    </main>
  );
}
