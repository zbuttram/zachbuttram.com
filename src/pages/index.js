import React from "react"
import Helmet from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import Me from "../img/me.jpg"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zach Buttram</title>
      </Helmet>
      <div className="container mx-auto pt-12 flex flex-col">
        <div>
          <h1 className="my-name">Zach Buttram</h1>
        </div>
        <div className="mx-auto pt-6 flex justify-center">
          <img
            src={Me}
            alt="Me!"
            className="rounded-full w-3/4 border-8 border-blue-500 shadow-lg"
          />
        </div>
        <div className="mx-6 pt-12">
          <p className="text-center">
            Hello! I'm a software engineer specializing in Web Application
            Development. I don't have a SoundCloud, but check out these links!
          </p>
        </div>
        <div className="mx-auto w-3/4 md:w-1/2 pt-12">
          <HomeLinkOut
            href="https://twitter.com/zbuttram"
            icon={faTwitterSquare}
          >
            Twitter
          </HomeLinkOut>
          <HomeLinkOut href="https://github.com/zbuttram" icon={faGithubSquare}>
            GitHub
          </HomeLinkOut>
          <HomeLinkOut href="https://linkedin.com/zbuttram" icon={faLinkedin}>
            LinkedIn
          </HomeLinkOut>
        </div>
      </div>
    </>
  )
}

function HomeLinkOut({ href, children, icon }) {
  return (
    <a
      href={href}
      className="my-2 mx-auto block w-full py-2 bg-blue-500 rounded text-center text-pink-200 shadow uppercase font-semibold tracking-wider transition duration-300 transform hover:scale-105 hover:bg-blue-300 hover:text-pink-600"
    >
      {icon && (
        <FontAwesomeIcon icon={icon} size="lg" className="ml-4 float-left" />
      )}
      {children}
      {icon && (
        <FontAwesomeIcon icon={icon} size="lg" className="mr-4 float-right" />
      )}
    </a>
  )
}
