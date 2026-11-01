import Link from "next/link";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import Kartu from "@/components/Kartu";
import { proyek } from "@/data/proyek";

const proyekTerbaru = proyek.slice(-3);

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama:"CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar"},
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Hero Section */}
      <Hero 
        nama="Zaima Melati"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Keahlian */}
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
          Lihat semua proyek

        </Link>
      </section>
    </main>
  );
}