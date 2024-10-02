//Import the StudentInfo component from student-info.
import StudentInfo from "./student-info";

//StudentInfo is displayed beneath the shopping list after being imported from student-info.js
export default function Page() {
  return (
    <main className="text-center">
      <h1 className="text-green-300 text-4xl font-bold my-10">Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
