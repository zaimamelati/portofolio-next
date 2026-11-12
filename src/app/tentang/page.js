import Kartu from "@/components/Kartu";

export const metadata = {
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Zaima Melati",
};

const hobi = [
    "Bernyanyi", 
    "Membaca novel", 
    "Mendengarkan musik",
];

const jadwalBelajar = [
    { hari: "Jum'at", waktu: "19.00-21.00", kegiatan: "Mempelajari materi UBIG" },
    { hari: "Sabtu", waktu: "18.00-22.00", kegiatan: "Mmengerjakan tugas UBIG" },
    { hari: "Minggu", waktu: "18.00-22.00", kegiatan: "Menegrjakan tugas UBIG" },
    { hari: "Senin", waktu: "18.00-21.30", kegiatan: "Merangkum modul" },
    { hari: "Selasa", waktu: "19.00-21.00", kegiatan: "Membuat video presentasi" },
    { hari: "Rabu", waktu: "20.00", kegiatan: "Mengumpulkan tugas" },
    { hari: "Kamis", waktu: "19.00-20.30", kegiatan: "Mengevaluasi tugas" },
];

const citaCita = [
    "Terus belajar dan berkembang di dunia IT",
    "Mengeksplorasi berbagai bidang teknologi",
    "Menjadi profesional yang adaptif di era digital",
];


export default function Tentang () {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Tentang Saya</h1>

            {/* Perkenalan */}
            <Kartu judul="Perkenalan">
                <p className="text-muted-foreground">
                    Saya seorang siswi SMK yang memiliki ketertarikan pada dunia teknologi 
                    dan selalu berusaha untuk terus berkembang.
                </p>
            </Kartu>

            {/* Hobi dan Cita-Cita */}
            <div className="grid gap-6 md:grid-cols-2">
                <Kartu judul="Hobi">
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {hobi.map((item)=> (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Kartu> 

                <Kartu judul="Cita-Cita">
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {citaCita.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Kartu>
            </div>

                {/* Jadwal belajar */}
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
                            <tbody className="divide-y divide-gray-200 text-muted-foreground">
                                {jadwalBelajar.map ((jadwal) => (
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
