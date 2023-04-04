import React from 'react'
import Head from 'next/head'

const Contact = () => {
  return (
   <>
     <Head>
        <title>Hunting Coder | Contact</title>
        <meta name="description" content="Coding Blog website for coders" />
        <meta name="keywords" content="coder, hunting coder, blog , next, next blog," />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`
      .btn{
        background-color: #f1536d;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none !important;
        display: inline-block;
        font-size: 16px;
        border: 1px solid white;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
       
    }
    .btn:hover{
        color:#f1536d ;
        background-color: aliceblue;
        border: 1px solid #f1536d;
    }
      `}</style>
   <div className="container my-3">
    <center><h1>Contact Us</h1></center>
    <form>
    <div className="form-group">
    <input type="text" className="form-control" id="name" placeholder='Enter Your Name' />
  </div>
  <div className="form-group">
    <input type="email" className="form-control" id="email" placeholder='Enter Your Email' />
  </div>
  <div className="form-group">
    <input type="text" className="form-control" id="contact" placeholder='Enter Your Contact Number' />
  </div>
  <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="6">Enter Your Query....</textarea>
  </div>
 
  <button type="submit" className="btn ">Submit</button>
</form>
   </div>
   </>
  )
}

export default Contact