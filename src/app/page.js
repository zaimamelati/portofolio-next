import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const hobi = [
  "Bernyanyi",
  "Membaca novel",
  "Mendengarkan musik",
];

const citaCita = [
  "Menjadi Web Developer",
  "Menjadi tester",
  "Menjadi UI/UX Design",
];

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama:"CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar"},
];

const jadwalBelajar = [
  { hari: "Jum'at", waktu: "19.00-21.00", kegiatan: "Mempelajari materi UBIG" },
  { hari: "Sabtu", waktu: "18.00-22.00", kegiatan: "Mmengerjakan tugas UBIG" },
  { hari: "Minggu", waktu: "18.00-22.00", kegiatan: "Menegrjakan tugas UBIG" },
  { hari: "Senin", waktu: "18.00-21.30", kegiatan: "Merangkum modul" },
  { hari: "Selasa", waktu: "19.00-21.00", kegiatan: "Membuat video presentasi" },
  { hari: "Rabu", waktu: "20.00", kegiatan: "Mengumpulkan tugas" },
  { hari: "Kamis", waktu: "19.00-20.30", kegiatan: "Mengevaluasi tugas" },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Hero Section */}
      <Hero 
        nama="Zaima Melati"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Tentang Saya */}
      <Kartu judul="Tentang Saya">
        <p className="text-gray-700 leading relaxed">
          Saya adalah siswi SMK, jurusan Rekayasa Perangkat Lunak 
          yang mengikuti kelas industri UBIG. Saya juga tertarik dengan Web Development.
        </p>
      </Kartu>

      {/* Hobi & Cita-Cita */}
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {hobi.map((item) =>(
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-Cita">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {citaCita.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>
      </div>

      {/* Keahlian */}
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      {/* Jadwal Belajar */}
      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-utama text-white">
              <tr>
                <th className="p-3">Hari</th>
                <th className="p-3">Waktu</th>
                <th className="p-3">Kegiatan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {jadwalBelajar.map((jadwal) => (
                <tr key={jadwal.hari}>
                  <td className="p-3">{jadwal.hari}</td>
                  <td className="p-3">{jadwal.waktu}</td>
                  <td className="p-3">{jadwal.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}