import Link from 'next/link';

function page() {
  return (
    <div>
      <ul className="text-4xl">
        <li>
          <Link href={'/dashboard/users/1'}>User 1 </Link>
        </li>
        <li>
          <Link href={'/dashboard/users/2'}>User 2 </Link>
        </li>
        <li>
          <Link href={'/dashboard/users/3'}>User 3 </Link>
        </li>
        <li>
          <Link href={'/dashboard/users/4'}>User 4 </Link>
        </li>
      </ul>
    </div>
  );
}
export default page;
