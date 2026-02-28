import Link from "next/link";
import { races } from "@/lib/data";

export default function RacesPage() {
  return (
    <main>
      <h1>‘å‰ïˆê——</h1>
      <ul>
        {races.map((r) => (
          <li key={r.slug}>
            <Link href={`/races/${r.slug}`}>
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}