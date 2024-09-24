//Import the StudentInfo component from student-info.
import StudentInfo from "./student-info";

//StudentInfo is displayed beneath the shopping list after being imported from student-info.js
export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
