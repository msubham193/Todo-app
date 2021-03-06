import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className=" flex-column w-full h-full">
    <Head>
      <title>To-do List</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <main className="h-full w-full flex flex-row">
      <Sidebar />
      <div className="w-full md:w-5/6 bg-gray-800 h-screen overflow-hidden flex justify-center items-center text-white">
        {" "}
        {children}
      </div>
    </main>
  </div>
  )
}

export default Layout