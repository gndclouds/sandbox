import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Experiments() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        sandbox
        </h1>
        <div className={styles.grid}>
          <a href="https://gndclouds-sandbox-notion-blog-nextjs.vercel.app/" className={styles.card}>
            <h2>Notion to Next.js Blog &rarr;</h2>
            <p>sandbox-notion-blog-nextjs &rarr;</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}