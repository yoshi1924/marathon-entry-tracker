export const dynamic = "force-static";

import { notFound } from "next/navigation";
import { races } from "@/lib/data";

export async function generateStaticParams() {
  return races.map((r) => ({
    slug: r.slug,
  }));
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  console.log("PARAMS:", params.slug);

  const race = races.find(
    (r) => r.slug.trim() === params.slug.trim()
  );

  if (!race) {
    console.log("NOT FOUND:", params.slug);
    return notFound();
  }

  return (
    <main>
      <h1>{race.name}</h1>
      <p>{race.slug}</p>
    </main>
  );
}