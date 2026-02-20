import { notFound, redirect } from "next/navigation";
import { races } from "@/lib/data";

export default async function OldRacePage({ params }: { params: { id: string } }) {
  const raceId = Number(params.id);
  const race = races.find((r) => r.id === raceId);
  if (!race) return notFound();
  redirect(`/races/${race.slug}`);
}