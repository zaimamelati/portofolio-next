"use client";

import { useActionState } from "react";
import TombolKirim from "@/components/TombolKirim";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Textarea } from "@/components/ui/textarea";

export default function FormProyek({ aksi, proyek, teksTombol }) {
    const [state, formAction] = useActionState (aksi, ({ proyek }));

    return (
        <form action={formAction} className="space-y-4">
            <input type="hidden" name="id" value={proyek.id} />
            <div className="space-y-2">
                <Label htmlFor="judul">Judul</Label>
                <Input id="judul" name="judul" defaultValue={state.proyek.judul} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="slug">Slug (alamat halaman detai)</Label>
                <Input id="slug" name="slug" defaultValue={state.proyek.slug} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="kategor">Kategori</Label>
                    <Input id="kategori" name="kategori" defaultValue={state.proyek.kategori} />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="minggu">Dibuat di</Label>
                <Input id="minggu" name="minggu" defaultValue={state.proyek.minggu} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="deskripsi">Deskripsi</Label>
                <Input id="deskripsi" name="deskripsi" defaultValue={state.proyek.deskripsi} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="fitur">Yang saya pelajari (satu baris satu poin)</Label>
                <Textarea
                    id="fitur"
                    name="fitur"
                    rows={3}
                    defaultValue={state.proyek.fitur.join("\n")}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="gambar_url">Alamat gambar</Label>
                <Input id="gambar_url" name="gambar_url" defaultValue={state.proyek.gambar_url} />
            </div>
            <TombolKirim teks={teksTombol}/>
            {state.error && <p className="text-sm text-aksen">{state.error}</p>}
        </form>
    )
}