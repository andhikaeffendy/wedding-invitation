"use client";

import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import OpeningCover from "./components/OpeningCover";
import HeroSection from "./components/HeroSection";
import CoupleProfile from "./components/CoupleProfile";
import EventDetails from "./components/EventDetails";
import LoveStory from "./components/LoveStory";
import GallerySection from "./components/GallerySection";
import RsvpSection from "./components/RsvpSection";
import QrGuestPass from "./components/QrGuestPass";
import GiftSection from "./components/GiftSection";
import WishesSection from "./components/WishesSection";
import ClosingSection from "./components/ClosingSection";
import MusicPlayer from "./components/MusicPlayer";

function InvitationContent() {
  const params = useParams();
  const slug = params.slug as string;
  // URL pattern: /i/[slug] or /i/[slug]/[guestName]
  // guestName is handled via params but we pass it as guestToken lookup
  const guestName = (params as any).guestName || '';

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const query = guestName ? `?guestName=${encodeURIComponent(guestName)}` : '';
      const res = await fetch(`/api/public/invitation/${slug}${query}`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [slug, guestName]);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#22382D] flex items-center justify-center">
        <div className="text-center text-[#C9A86A]">
          <div className="w-14 h-14 border-2 border-[#C9A86A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-serif text-lg">Memuat undangan...</p>
        </div>
      </div>
    );
  }

  const guestToken = data.guest?.guest_token || '';

  return (
    <main className="relative w-full overflow-x-hidden">
      <OpeningCover guestToken={guestToken} invitation={data.invitation} guest={data.guest} />
      <HeroSection invitation={data.invitation} />
      <CoupleProfile invitation={data.invitation} />
      <EventDetails invitation={data.invitation} />
      <LoveStory invitation={data.invitation} />
      <GallerySection gallery={data.gallery} />
      <RsvpSection guestToken={guestToken} guest={data.guest} invitation={data.invitation} />
      <QrGuestPass guestToken={guestToken} guest={data.guest} invitation={data.invitation} />
      <GiftSection bankAccounts={data.bankAccounts} />
      <WishesSection guestToken={guestToken} wishes={data.wishes} invitation={data.invitation} />
      <ClosingSection invitation={data.invitation} />
      <MusicPlayer invitation={data.invitation} />
    </main>
  );
}

export default function InvitationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#22382D] flex items-center justify-center">
        <div className="text-center text-[#C9A86A]">
          <div className="w-14 h-14 border-2 border-[#C9A86A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-serif text-lg">Memuat undangan...</p>
        </div>
      </div>
    }>
      <InvitationContent />
    </Suspense>
  );
}
