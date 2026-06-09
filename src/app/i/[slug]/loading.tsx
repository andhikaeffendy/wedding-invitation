export default function Loading() {
  return (
    <div className="min-h-screen bg-[#22382D] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#C9A86A] flex items-center justify-center">
          <span className="font-display text-2xl text-[#C9A86A]">A<span className="text-lg">&</span>L</span>
        </div>
        <div className="w-10 h-10 border-2 border-[#C9A86A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-[#A9B89B] text-sm">Mempersiapkan undangan...</p>
      </div>
    </div>
  );
}
