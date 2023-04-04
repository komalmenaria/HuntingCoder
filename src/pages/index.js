import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Coding Blog website for coders" />
        <meta name="keywords" content="coder, hunting coder, blog , next, next blog," />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      {/* <style jsx> {` .myspan{   color:black; } `} </style> */}
       <div className={styles.heading}>
       <Image
      // loader={myLoader}
      className={styles.komal_image}
      src="/komal_Menaria.png"
      alt="Picture of the author"
      width={150}
      height={150}
    />
     <h1 className={styles.code} style={{ fontSize: "70px" }}> <span className="myspan"> Komal Hunting Coder</span> </h1>
       <code className={styles.code} style={{ fontSize: "20px" }}>A blog for Hunting Coders by a Hunting Coder</code>
       </div>

       <h2>Popular blogs</h2>
        <div className={styles.grid}>
          
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Docs <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>

          <Link
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Learn <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </Link>

          <Link
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Templates <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
