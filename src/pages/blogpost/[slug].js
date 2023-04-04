import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return <>
    <Head>
      <title>Blog | {slug}</title>
      <meta name="description" content="Coding Blog website for coders" />
      <meta name="keywords" content="coder, hunting coder, blog , next, next blog," />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
   <div className="container">
   <div className="d-flex flex-column justify-content-center align-items-center my-3">
      <h1>{slug}</h1>
      <hr style={{width:"100%",height:"5px",background:"#f1536d"}} />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta quos autem explicabo, reprehenderit vel harum ducimus quod at molestiae non laudantium iusto officia similique ullam quam. Debitis voluptatibus hic recusandae rem tempora nisi animi atque, quia, beatae expedita, veritatis neque dolore aperiam quaerat qui assumenda a pariatur esse vel totam quo delectus eaque dicta? Laboriosam amet libero doloribus facere.</p>
    </div>
   </div>
  </>
}

export default Post