import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    
    fetch("/api/events", {
      method: "GET"
    }).then(data => data.json()).then(res => setData(res));

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Events Practice App</title>
        <meta name="description" content="Practicing for the events app" />      
      </Head>

      <main className={styles.main}>        
        {data && data.map(event => (
          <div key={event.id}>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
