'use client'
import Link from 'next/navigation';
import styles from './page.module.css'
import {useState} from 'react';

export default function Home() {
  const [name,setName] = useState("Walia");
  // var chng = "Manish";
  const callfunc = () => {
    alert("new");
    // chng = "Walia"
    setName("Manish");
  }
  
  return (
    <main className={styles.main}>
      <Link href="/about"> About</Link>
    </main>
  );
}


