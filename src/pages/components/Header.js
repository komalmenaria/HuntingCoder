import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'

const Header = () => {
  return (
   <>
    <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
      </Head>
   <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" />
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"> <b style={{ color: "#e83e8c", fontFamily: "unset" }}>Hunting Coder</b> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" href="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/blogs">Blogs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>

        </div>
      </nav>
   </>
  )
}

export default Header