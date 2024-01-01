'use client'
import Link from 'next/link';
// import styles from './page.module.css'
// import {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  // const [name,setName] = useState("Walia");
  const router = useRouter();
  const navigate = (path) =>{
    router.push(path)
  }
  return (
    <main className={styles.main}>
    
    </main>
  );
}


