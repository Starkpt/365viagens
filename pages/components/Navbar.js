import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="" className="navbar-horizontal"><Image src="/rscs/logo-horizontal.png" layout="fill" alt="365 Viagens" /></a>
        <a href="" className="navbar-squared"><Image src="/rscs/logo-squared.png" layout="fill" alt="365 Viagens"/></a>
      </div>
      <div className="navbar-list-container">
        <ul className="navbar-list">
          <li><a href="#">Travel</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </div>
  )
}
