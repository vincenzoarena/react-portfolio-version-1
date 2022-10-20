import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaFlickr} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/KeldorTheEvil/" target="blank"><BsFacebook /></a>
        <a href="https://www.linkedin.com/in/vincenzo-arena-032a064b/" target="blank"><BsLinkedin /></a>
        <a href="https://github.com/vincenzoarena" target="blank"><FaGithub /></a>
        <a href="https://www.instagram.com/keldorevilmountain/" target="blank"><FaInstagramSquare /></a>
        <a href="https://twitter.com/KeldorTheEvil" target="blank"><FaTwitterSquare /></a>
        <a href="https://flickr.com/photos/penninoematita/" target="blank"><FaFlickr /></a>
    </div>
  )
}

export default HeaderSocials