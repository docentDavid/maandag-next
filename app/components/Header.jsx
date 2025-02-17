import Link from "next/link";

export default function Header() {
  return (
    <header className="grid">
      <h1>
        <Link href="/">NEXT.js</Link>
      </h1>
      <nav>
        <Link href="/Showcase">Showcase</Link>
        <Link href="/Documents">Documents</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Templates">Templates</Link>
      </nav>
    </header>
  );
}
