"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen bg-[#22382D] flex items-center justify-center p-6">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#B86B4B] flex items-center justify-center">
          <span className="text-3xl">💔</span>
        </div>
        <h2 className="font-display text-2xl text-[#F7F1E6] mb-2">Ups, ada kesalahan</h2>
        <p className="text-[#A9B89B] text-sm mb-6">Silakan coba lagi atau hubungi pengirim undangan.</p>
        <button onClick={reset} className="btn-primary">Coba Lagi</button>
      </div>
    </div>
  );
}
