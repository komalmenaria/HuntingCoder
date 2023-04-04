import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Blogs.module.css'
import Link from 'next/link'


const Blogs = () => {
  return (
    <>
    
    <Head>
        <title>Hunting Coder | Blogs</title>
        <meta name="description" content="Coding Blog website for coders" />
        <meta name="keywords" content="coder, hunting coder, blog , next, next blog," />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <center style={{marginTop:"10px"}}> <h1>Coding | Blogs</h1></center>
    <div className={styles.blogs}>
    <div className="card" style={{width:"18rem"}}>
  <Image  src="/blog1.jpg"   className="card-img-top" alt="Blog post"   width={150}   height={200}  style={{objectFit: "cover"}}
  />
  <div className="card-body">
    <h5 className="card-title">Learn Javascript in 2023</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/blogpost/Learn Javascript in 2023"  className={styles.btn} >Read More</Link>
  </div>
</div>
    </div>
    </>
  )
}

export default Blogs