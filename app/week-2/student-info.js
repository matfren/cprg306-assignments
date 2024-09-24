import Link from 'next/link';

//Component to return my name and Github repository link. Is then imported in page.js to be used.
export default function StudentInfo() {
  return (
    <div>
        <Name />
        <GithubLink />
    </div>
  );
}

//Name portion of component.
function Name() {
    return (
        <p>Mathieu Frenette</p>
    );
}

//Github link portion of component. Uses "import Link from 'next/link';" for Link to function.
function GithubLink() {
    return (
        <Link href="https://github.com/matfren/cprg306-assignments" class="hover:underline hover:text-green-500">Github Repository</Link>
    );
}
