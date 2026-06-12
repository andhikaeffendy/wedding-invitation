"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import type { TemplateData } from "@/lib/template-types";

// Lazy load template components - 18 templates
const ModernTemplate = dynamic(() => import("./templates/modern/page"), { ssr: false });
const RoseGoldTemplate = dynamic(() => import("./templates/rosegold/page"), { ssr: false });
const MinimalTemplate = dynamic(() => import("./templates/minimal/page"), { ssr: false });
const TropicalTemplate = dynamic(() => import("./templates/tropical/page"), { ssr: false });
const RoyalTemplate = dynamic(() => import("./templates/royal/page"), { ssr: false });
const SakuraTemplate = dynamic(() => import("./templates/sakura/page"), { ssr: false });
const VintageTemplate = dynamic(() => import("./templates/vintage/page"), { ssr: false });
const AureumTemplate = dynamic(() => import("./templates/aureum/page"), { ssr: false });
const CelestialTemplate = dynamic(() => import("./templates/celestial/page"), { ssr: false });
const TerracottaTemplate = dynamic(() => import("./templates/terracotta/page"), { ssr: false });
const OceanTemplate = dynamic(() => import("./templates/ocean/page"), { ssr: false });
const JasmineTemplate = dynamic(() => import("./templates/jasmine/page"), { ssr: false });
const DreamGardenTemplate = dynamic(() => import("./templates/dreamgarden/page"), { ssr: false });
const JavaneseTemplate = dynamic(() => import("./templates/javanese/page"), { ssr: false });
const AireRoyaleTemplate = dynamic(() => import("./templates/aireroyale/page"), { ssr: false });
const PremiumBlushTemplate = dynamic(() => import("./templates/premium-blush/page"), { ssr: false });
const LuxuryLavenderTemplate = dynamic(() => import("./templates/luxury-lavender/page"), { ssr: false });
const ExclusiveNoirTemplate = dynamic(() => import("./templates/exclusive-noir/page"), { ssr: false });
const SageDreamTemplate = dynamic(() => import("./templates/sage-dream/page"), { ssr: false });
const EternalSageTemplate = dynamic(() => import("./templates/eternal-sage-luxury/page"), { ssr: false });
const WekitaEleganceTemplate = dynamic(() => import("./templates/wekita-elegance/page"), { ssr: false });
const BlushRomanceTemplate = dynamic(() => import("./templates/blush-romance/page"), { ssr: false });

function InvitationContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const guestToken = searchParams.get('guest') || '';
  
  // Template override: check URL search params (robust fallback for client-side)
  const templateOverride = searchParams.get('template') ||
    (typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('template') : null) || '';

  const [data, setData] = useState<TemplateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const query = guestToken ? `?guestToken=${encodeURIComponent(guestToken)}` : '';
      const res = await fetch(`/api/public/invitation/${slug}${query}`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [slug, guestToken]);

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

  // Select template: URL ?template= override > data template_id > data theme.id > default
  const templateId = templateOverride || data.invitation?.template_id || data.invitation?.theme?.id || 'modern-organic-luxury';

  switch (templateId) {
    case 'classic-rose-gold': return <RoseGoldTemplate data={data} />;
    case 'minimal-monochrome': return <MinimalTemplate data={data} />;
    case 'tropical-paradise': return <TropicalTemplate data={data} />;
    case 'royal-purple': return <RoyalTemplate data={data} />;
    case 'sakura-pink': return <SakuraTemplate data={data} />;
    case 'vintage-kraft': return <VintageTemplate data={data} />;
    case 'aureum-gold': return <AureumTemplate data={data} />;
    case 'celestial-night': return <CelestialTemplate data={data} />;
    case 'terracotta-bloom': return <TerracottaTemplate data={data} />;
    case 'ocean-breeze': return <OceanTemplate data={data} />;
    case 'jasmine-white': return <JasmineTemplate data={data} />;
    case 'dream-garden': return <DreamGardenTemplate data={data} />;
    case 'javanese-elegance': return <JavaneseTemplate data={data} />;
    case 'aire-royale': return <AireRoyaleTemplate data={data} />;
    case 'premium-blush': return <PremiumBlushTemplate data={data} />;
    case 'luxury-lavender': return <LuxuryLavenderTemplate data={data} />;
    case 'exclusive-noir': return <ExclusiveNoirTemplate data={data} />;
    case 'sage-dream': return <SageDreamTemplate data={data} />;
    case 'eternal-sage-luxury': return <EternalSageTemplate data={data} />;
    case 'wekita-elegance': return <WekitaEleganceTemplate data={data} />;
    case 'blush-romance': return <BlushRomanceTemplate data={data} />;
    default: return <ModernTemplate data={data} />;
  }
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
