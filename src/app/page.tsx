'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Home</h1>
      <button onClick={() => alert("HELLO")}>Click me</button>
      <br />
      <br />
      <Link href='/login'>Go to login Page</Link>
      <br />
      <br />
      <Link href='/about-us'>Go to About-us Page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Login</button>
      <br />
      <br />
      <button onClick={() => router.push("/about-us")}>About Us</button>

    </main>
  );
}
