// app/races/[slug]/page.tsx

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
  if (!params || !params.slug) {
    return notFound();
  }

  const race = races.find((r) => r.slug === params.slug);

  if (!race) {
    return notFound();
  }

  return (
    <main>
      <h1>{race.name}</h1>
      <p>{race.slug}</p>
    </main>
  );
}