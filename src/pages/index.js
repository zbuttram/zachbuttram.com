import React from "react"

import Me from "../img/me.jpg"

function HomeLinkOut({ href, children }) {
  return (
    <a
      href={href}
      className="my-2 w-full py-2 bg-blue-500 rounded text-center text-pink-200 shadow uppercase font-semibold tracking-wider transition duration-300 hover:bg-blue-300 hover:text-pink-600"
    >
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <>
      <div className="container mx-auto pt-12 flex flex-col">
        <div className="">
          <h1 className="text-6xl text-center font-marker italic bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Zach Buttram
          </h1>
        </div>
        <div className="mx-auto pt-6">
          <img
            src={Me}
            alt="Me!"
            className="rounded-full border-8 border-blue-400 border-opacity-75 shadow-lg"
          />
        </div>
        <div className="mx-6 pt-12">
          <p className="text-center">
            Hello! I'm a software engineer specializing in Web Application
            Development. I don't have a soundcloud, but check out these links!
          </p>
        </div>
        <div className="mx-auto w-1/2 pt-12 flex flex-col">
          <HomeLinkOut href="https://twitter.com/zbuttram">Twitter</HomeLinkOut>
          <HomeLinkOut href="https://github.com/zbuttram">GitHub</HomeLinkOut>
          <HomeLinkOut href="https://linkedin.com/zbuttram">
            LinkedIn
          </HomeLinkOut>
        </div>
      </div>
    </>
  )
}
