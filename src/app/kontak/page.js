import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Zaima Melati melalui form kontak, email atau GitHub."
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">Hubungi Saya</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
                </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3  ">
                <section className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm md:col-span-2">
                    <FormKontak />
                </section>
                

                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm h-fit space-y-4">
                    <h2 className="text-xl font-bold text-utama dark:text-sky-200">Temukan Saya di</h2>
                    <div>
                        <a
                            href="https://github.com/zaimamelati"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-aksen dark:text-red-300 hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a
                            href="mailto:zaimamelati@gmail.com"
                            className="text-sm text-aksen dark:text-red-300 hover:underline"
                        >
                            zaimamelati@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}