import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#22382D] flex items-center justify-center p-6">
      <div className="text-center max-w-sm">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#C9A86A] flex items-center justify-center">
          <span className="text-3xl font-serif text-[#C9A86A]">404</span>
        </div>
        <h2 className="font-display text-2xl text-[#F7F1E6] mb-2">Undangan Tidak Ditemukan</h2>
        <p className="text-[#A9B89B] text-sm mb-6">Link undangan tidak valid atau sudah tidak tersedia.</p>
        <Link href="/" className="btn-primary">Kembali ke Beranda</Link>
      </div>
    </div>
  );
}
