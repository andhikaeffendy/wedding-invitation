"use client";

import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load template components
const ModernTemplate = dynamic(() => import("./templates/modern/page"), { ssr: false });
const RoseGoldTemplate = dynamic(() => import("./templates/rosegold/page"), { ssr: false });
const MinimalTemplate = dynamic(() => import("./templates/minimal/page"), { ssr: false });

function InvitationContent() {
  const params = useParams();
  const slug = params.slug as string;
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
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-14 h-14 border-2 border-[#C9A86A] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#C9A86A] text-lg font-serif">Memuat undangan...</p>
        </div>
      </div>
    );
  }

  // Select template based on theme.id
  const templateId = data.invitation?.theme?.id || 'modern-organic-luxury';

  if (templateId === 'classic-rose-gold') {
    return <RoseGoldTemplate data={data} />;
  }
  if (templateId === 'minimal-monochrome') {
    return <MinimalTemplate data={data} />;
  }
  // Default: modern-organic-luxury (and any other)
  return <ModernTemplate data={data} />;
}

export default function InvitationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="w-14 h-14 border-2 border-[#C9A86A] border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    }>
      <InvitationContent />
    </Suspense>
  );
}
