"use client";

import {useState} from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [hp, setHp] = useState ("");
    const [keperluan, setKeperluan] = useState("");
    const [pesan, setPesan] = useState("");
    const [error, setError] = useState({});
    const [berhasil, setBerhasil] = useState(false);

    function kirim(e) {
        e.preventDefault();
        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi";
        }
        if (!email.includes("@")) {
            errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
        }
        if (hp.length < 10) {
            errorBaru.hp = "Nomor HP minimal lebih dari 10 angka";
        }
        if (keperluan === "") {
            errorBaru.keperluan = "Keperluan wajib dipilih"
        }
        if (pesan.trim().length <10) {
            errorBaru.pesan = "Pesan minimal 10 karakter";
        }

        setError(errorBaru);
        setBerhasil(Object.keys(errorBaru).length === 0);
    }

    return (
        <form onSubmit={kirim} noValidate className="space-y-4">
            <div>
                <label htmlFor="nama" className="block font-semibold dark:text-gray-200">
                    Nama lengkap
                </label>
                <input 
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Azalea Queenza"
                    className={kelasInput}
                />
                {error.nama && <p className="mt-1 text-sm text-aksen dark:text-red-400">{error.nama}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block font-semibold dark:text-gray-200">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className={kelasInput}
                />
                {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-400">{error.email}</p>}
            </div>
            <div>
                <label htmlFor="hp" className="block font-semibold dark:text-gray-200">
                    Nomor HP
                </label>
                <input
                    type="text"
                    id="hp"
                    name="hp"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    placeholder="081234567890"
                    className={kelasInput}
                />
                {error.hp && <p className="mt-1 text-sm text-aksen dark:text-red-400">{error.hp}</p>}
            </div>
            <div>
                <label htmlFor="Keperluan" className="block font-semibold dark:text-gray-200">
                    Keperluan
                </label>
                <select
                    id="keperluan"
                    name="keperluan"
                    value={keperluan}
                    onChange={(e) => setKeperluan(e.target.value)}
                    className={kelasInput}
                >
                    <option value="">-- Pilih Keperluan --</option>
                    <option value="kerjasama">Kerjasama</option>
                    <option value="pertanyaan">Pertanyaan</option>
                    <option value="lainnya">Lainnya</option>
                </select>
                {error.keperluan && <p className="mt-1 text-sm text-aksen dark:text-red-400">{error.keperluan}</p>}
            </div>
            <div>
                <label htmlFor="pesan" className="block font-semibold">
                    Pesan
                </label>
                <textarea
                    id="pesan"
                    name="pesan"
                    rows={5}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Tulis pesan mu di sini"
                    className={kelasInput}
                ></textarea>
                {error.pesan && <p className="mt-1 text-sm text-aksen dark:text-red-400">{error.pesan}</p>}
            </div>

            <button 
                type="submit"
                className="rounded-lg bg-utama px-5 py-2 font-semibold text-white dark:text-gray-300 transition hover:opacity-90"
            >
                Kirim Pesan
            </button>
            {berhasil && (
                <p className="rounded-lg bg-green-50 dark:bg-green-700 p-3 text-green-800 dark:text-green-200">
                    Terima kasih, {nama}! Pesanmu telah lolos pemeriksaan [cite: 48, 54, 74, 75].
                </p>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-300">
                Form ini belum mengirim pesan. Pengiriman pesan diaktifkan di Minggu 15.
            </p>
        </form>
    )
}