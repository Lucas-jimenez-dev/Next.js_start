import Link from 'next/link';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    console.log('index page did mount');
  }, []);

  return (
    <ul>
      <h1>Welcome</h1>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href='/termsOfUse'>
          <a>terms of use</a>
        </Link>
      </li>
    </ul>
  );
}
