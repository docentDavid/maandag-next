import Link from "next/link";

export default function Header() {
  return (
    <header class="grid">
      <h1>
        <Link href="/">NEXT.js</Link>
      </h1>
      <nav>
        <Link href="/Showcase">Showcase</Link>
        <Link href="/Docs">Docs</Link>
        <a href="/Blog">Blog</a>
        <a href="">Templates</a>
        <a href="">Enterprise</a>
      </nav>
    </header>
  );
}
