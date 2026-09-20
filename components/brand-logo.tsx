/** Shared bilingual wordmark. Dimensions reserve space while the image loads. */
export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <img
    className={`brand-logo${compact ? ' brand-logo-compact' : ''}`}
    src={`${process.env.NEXT_PUBLIC_ASSET_BASE ?? ''}/brand/zarbol-masal-logo.png`}
    alt="Zarbol Masal · ضرب‌المثل"
    width={2172}
    height={724}
    decoding="async"
  />;
}
