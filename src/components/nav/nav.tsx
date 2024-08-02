"use client";

import { useState } from "react";

import { Menu } from "../icons/menu";
import { Close } from "../icons/close";

import "./nav.css";
import Link from "next/link";
import { useBlock } from "@/src/context/blockProvider";
import Image from "next/image";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setBlock } = useBlock();
  function blockNav() {
    setMenuOpen(!menuOpen);
    setBlock(!menuOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-title">
          <Image
            className="navbar-logo"
            src="/images/logo.svg"
            alt="Logo"
            width={22}
            height={22}
          />
          <h1 className="navbar-title">Pontynhos de Amor</h1>
        </div>
        <div className="navbar-menu-icon">
          <button onClick={() => blockNav()} className="navbar-button">
            {!menuOpen && <Menu className="icon" />}
          </button>
        </div>
      </div>
      <div
        className={`navbar-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about-us">Sobre nós</Link>
        <Link href="/faq">FAQs</Link>
      </div>

      <div className="navbar-desktop">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">Sobre Nós</Link>
          </li>
          <li>
            <Link href="/faq">FAQs</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-container-blank" />

      {menuOpen && (
        <button onClick={() => blockNav()} className="navbar-button-close">
          <Close className="icon" />
        </button>
      )}
    </nav>
  );
}

export default Nav;
