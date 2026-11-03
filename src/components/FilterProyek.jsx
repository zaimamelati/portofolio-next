"use client";

import { useState} from "react";
import ProyekCard from "./ProyekCard";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.js"];
const tombolBiasa = "rounded-full border border-utama px-4 py-1 text-sm font-semibold dark:text-gray-200 text-utama dark:text-sky-200";
const tombolAktif = "rounded-full border border-aksen bg-aksen px-4 py-1 text-sm font-semibold text-white dark:text-gray-400";

export default function FilterProyek ({ proyek }) {
    const [kategori, setKategori] = useState("Semua");
    const [kata, setKata] = useState("");
    
    const kataKecil = kata.toLowerCase(); 
    const hasil = proyek.filter((p) => {
        const cocokKategori = kategori === "Semua" || p.kategori === kategori;
        const cocokKata = p.judul.toLowerCase().includes(kataKecil);
        return cocokKategori && cocokKata;
    });

    return (
        <div className="mt-8">
            <div className="flex flex-wrap gap-2">
                {daftarKategori.map((k) => (
                    <button key={k} type="button" onClick={() => setKategori(k)} className={kategori === k ? tombolAktif : tombolBiasa}>
                        {k}
                    </button>
                ))}
            </div>

            <div className="mt-6">
                <label htmlFor="cari" className="block font-semibold dark:text-gray-200">
                    Cari proyek
                </label>
                <input 
                    type="text"
                    id="cari"
                    value={kata}
                    onChange={(e) => setKata(e.target.value)}
                    placeholder="Contoh: Kalkulator"
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 md:w-80"
                />
                {kata && (
                    <button 
                        type="button"
                        onClick={() => setKata("")}
                        className="ml-3 text-sm text-aksen dark:text-red-400 hover:underline"
                    >
                        Hapus pencarian
                    </button>
                )}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {hasil.map((item) => (
                    <ProyekCard key={item.slug} proyek={item} />
                ))}
            </div>
            {hasil.length === 0 && (
                <p className="mt-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-2 text-center text-gray-600">
                    Belum ada proyek yang cocok
                </p>
            )}
        </div>
    );
}