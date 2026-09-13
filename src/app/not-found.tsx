import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="kicker">404 / Lost profile</p><h1>Nothing sparked here.</h1><p>The page you followed does not exist or has moved.</p><Link className="button" href="/">Return to Flint</Link></main>;
}
