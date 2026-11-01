export const metadata = {
    title: "Kontak",
    description: "Hubungi Zaima Melati melalui form kontak, email atau GitHub."
};

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
                <p className="mt-2 text-gray-600">
                    Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nama" className="block font-semibold text-gray-700">
                                Nama Lengkap
                            </label>
                            <input 
                                type="text"
                                id="nama"
                                name="nama"
                                placeholder="Contoh: Azalea Queenza"
                                required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-semibold text-gray-700">
                                Email
                            </label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="nama@gmail.com"
                                required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:border-utama focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="hp" className="block font-semibold text-gray-700">
                                Nomor HP
                            </label>
                            <input 
                                type="text"
                                id="hp"
                                name="hp"
                                placeholder="081234567890"
                                required className="mt-1 w-full rounded-lg border-border-gray-300 bg-white p-2 focus:border-utama focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="Keperluan" className="block font-semibold text-gray-700">
                                Keperluan
                            </label>
                            <select
                                id="kepeluan"
                                name="keperluan"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:border-utama focus:outline-none"
                            >
                                <option value="">- Pilih Keperluan -</option>
                                <option value="kerjasama">Kerjasama</option>
                                <option value="pertanyaan">Pertanyaan</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="pesan" className="block font-semibold text-gray-700">
                                Pesan
                            </label>
                            <textarea
                                id="pesan"
                                name="pesan"
                                rows={5}
                                placeholder="Tulis pesanmu di sini"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:border-utama focus:outline-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="rounded-lg bg-utama px-5 py-2 font-semibold text-white transition hover:opacity-90"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                    <p className="mt-3 text-gray-500">
                        Form ini belum mengirim pesan. Pengiriman pesan diaktifkan di Minggu 15.
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-fit space-y-4">
                    <h2 className="text-xl font-bold text-utama">Temukan Saya di</h2>
                    <div>
                        <a
                            href="https://github.com/zaimamelati"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-aksen hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a
                            href="mailto:zaimamelati@gmail.com"
                            className="text-sm text-aksen hover:underline"
                        >
                            zaimamelati@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}