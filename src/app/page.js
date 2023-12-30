'use client'
import Link from 'next/link';
// import styles from './page.module.css'
// import {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  // const [name,setName] = useState("Walia");
  const router = useRouter();
  return (
    <main >
      <p>Nice</p>
      <Link href="/about"> About</Link><br></br>
      <button onClick = {() => router.push('/about')}>About US</button>
     </main>
  );
}


