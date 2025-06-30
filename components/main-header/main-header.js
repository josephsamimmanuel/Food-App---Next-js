"use client";

import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          src={logoImg}
          alt="NextLevel Food"
          width={100}
          height={100}
          priority
        />
        <h1>NextLevel Food</h1>
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navLinks}>
          <li>
            <Link href="/meals" className={isActive("/meals") ? classes.active : undefined}>BrowseMeals</Link>
          </li>
          <li>
            <Link href="/community" className={isActive("/community") ? classes.active : undefined}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}