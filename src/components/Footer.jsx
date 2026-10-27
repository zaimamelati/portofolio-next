export default function Footer() {
    const tahunSekarang = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-utama py-4 text-center text-white text-sm">
            <p>{'\u00A9'} {tahunSekarang} Zaima Melati. Dibuat dengan Next.js | Kelas Industri UBIG.</p>
        </footer>
    )
}