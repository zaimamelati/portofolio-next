import Link from "next/link";
import FormProyek from "@/components/FormProyek";
import { tambahProyek } from "@/app/kelola/actions";

const proyekKosong = {
    id: "",
    judul: "",
    slug: "",
    kategori:"",
    minggu:"",
    deskripsi:"",
    fitur: [],
    gambar_url:"",
};

export default function HalamanProyekBaru() {
    return (
        <main className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Tambah Proyek Baru</h1>
                    <p className="text-sm text-muted-foreground">
                        Isi detail proyek untuk disimpan ke database melalui Server Action.
                    </p>
                </div>

                <Link
                    href="/kelola" 
                    className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                    Kembali ke Kelola
                </Link>
            </div>

            <FormProyek
                aksi={tambahProyek}
                proyek={proyekKosong}
                teksTombol="Simpan Proyek"
            />
        </main>
    );
}