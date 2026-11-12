import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Zaima Melati melalui form kontak, email atau GitHub."
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-primary md:text-4xl">Hubungi Saya</h1>
                <p className="mt-2 text-mutedt-foreground">
                    Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
                </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3  ">
                <Card className="md:col-span-2">
                    <CardContent>
                        <FormKontak />
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-primary">Temukan Saya di</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/zaimamelati" target="_blank" className="text-aksen hover:underline">
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="mailto:zaimamelati@gmail.com" className="text-aksen hover:underline">
                                    zaimamelati@gmail.com
                                </a>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}