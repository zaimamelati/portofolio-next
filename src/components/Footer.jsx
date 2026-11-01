export default function Footer() {
    const tahun = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-utama p-6 text-center text-latar">
            <p>&copy; {tahun} Zaima Melati. Dibuat dengan Next.js | Kelas Industri UBIG.</p>
        </footer>
    );
}