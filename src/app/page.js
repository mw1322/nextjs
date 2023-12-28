'use client'
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
  const InnerCompt = () => {
    return (
      <h2>Nice Movfgnie</h2>
    );
  }
  return (
    <main className={styles.main}>
      {/* <User name="Manish" />
      <User name="Rohan" />
      <User name="Krish" /> */}
      <p>My namse is {name}</p>
      <button onClick={() => callfunc()}>click me</button>
      <InnerCompt/>
      {InnerCompt()}
    </main>
  );
}
let User = (props) =>{
  return (
    <p>Nice I  am {props.name}</p>
  );
}
