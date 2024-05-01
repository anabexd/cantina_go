'use client'
import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-row gap-40 items-center  justify-center p-24 bg-neutral-50">
      <Header />
    <p className="text-3xl font-semibold text-zinc-600 w-1/4">Chegou a hora de <span className="text-orange-600">otimizar</span> o cardápio da cantina.</p>
    <Image src='/logo.svg' width={200} height={200} alt=""></Image>
    </main>
    </>
  );
}
