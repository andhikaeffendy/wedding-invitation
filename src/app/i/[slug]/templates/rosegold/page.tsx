"use client";
import WeddingTemplateShell from "@/components/WeddingTemplateShell";
import type { TemplateData } from "@/lib/template-types";

interface Props { data: TemplateData; }

export default function Template({ data }: Props) {
  return <WeddingTemplateShell data={data} templateId="classic-rose-gold" />;
}
