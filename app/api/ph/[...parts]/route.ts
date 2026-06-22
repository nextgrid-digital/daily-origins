import { NextRequest } from "next/server";

// Daily Origins packaging renderer. Produces a modern frosted-glass jar or
// bottle with an oversized, color-coded lid — no ingredient photos, no medical
// styling. The lid color is keyed off the ritual family passed in the URL:
//   /api/ph/<tone>/<shape>/<seed>/<w>/<h>/<eyebrow>/<title>

type Family = {
  lid: string;
  lidEdge: string;
  tint: string;
  bg: string;
};

const FAMILIES: Record<string, Family> = {
  energy: { lid: "#c0531f", lidEdge: "#a5441728", tint: "#f3e2d4", bg: "#f7efe4" },
  focus: { lid: "#1e3a5f", lidEdge: "#15293f28", tint: "#dde4ee", bg: "#eef0f4" },
  recovery: { lid: "#1f1f1f", lidEdge: "#00000030", tint: "#e3e1dc", bg: "#f1efe9" },
  sleep: { lid: "#9385b8", lidEdge: "#6f63902a", tint: "#e8e3f1", bg: "#f1eef6" },
  immunity: { lid: "#2f5d3a", lidEdge: "#21452b28", tint: "#dde9df", bg: "#ecf1ec" },
  ivory: { lid: "#d9cdb8", lidEdge: "#bfb097", tint: "#efe8da", bg: "#f7f3ea" },
  stone: { lid: "#cabfa6", lidEdge: "#b3a585", tint: "#e9e1d1", bg: "#f1ebdd" },
  ink: { lid: "#2b2920", lidEdge: "#00000030", tint: "#dcd8cd", bg: "#edeae1" },
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function jar(fam: Family): string {
  return `
    <!-- soft shadow -->
    <ellipse cx="600" cy="1180" rx="250" ry="34" fill="#00000010"/>
    <!-- frosted body -->
    <rect x="360" y="470" width="480" height="710" rx="74" fill="url(#glass)" stroke="#ffffff80" stroke-width="2"/>
    <rect x="360" y="470" width="480" height="710" rx="74" fill="none" stroke="${fam.lidEdge}" stroke-width="1.5"/>
    <!-- highlight -->
    <rect x="404" y="520" width="60" height="600" rx="30" fill="#ffffff55"/>
    <!-- oversized lid -->
    <rect x="396" y="350" width="408" height="150" rx="46" fill="${fam.lid}"/>
    <rect x="396" y="350" width="408" height="44" rx="22" fill="#ffffff18"/>
  `;
}

function bottle(fam: Family): string {
  return `
    <ellipse cx="600" cy="1190" rx="190" ry="28" fill="#00000010"/>
    <!-- shoulders + body -->
    <path d="M470 560 q0 -70 60 -120 l0 -70 140 0 0 70 q60 50 60 120 l0 560 q0 60 -60 60 l-140 0 q-60 0 -60 -60 z"
      fill="url(#glass)" stroke="#ffffff80" stroke-width="2"/>
    <rect x="512" y="430" width="176" height="70" fill="url(#glass)"/>
    <!-- highlight -->
    <rect x="506" y="640" width="44" height="430" rx="22" fill="#ffffff50"/>
    <!-- oversized cap -->
    <rect x="500" y="300" width="200" height="150" rx="34" fill="${fam.lid}"/>
    <rect x="500" y="300" width="200" height="40" rx="20" fill="#ffffff18"/>
  `;
}

function scene(fam: Family): string {
  return `
    <circle cx="600" cy="760" r="300" fill="${fam.tint}"/>
    <circle cx="600" cy="760" r="300" fill="none" stroke="${fam.lidEdge}" stroke-width="1.5"/>
    <circle cx="470" cy="640" r="90" fill="#ffffff60"/>
  `;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ parts: string[] }> }
) {
  const { parts } = await params;
  const [toneRaw, shapeRaw, , wRaw, hRaw, eyebrowRaw, titleRaw] = parts;

  const fam = FAMILIES[toneRaw ?? "ivory"] ?? FAMILIES.ivory!;
  const shape = shapeRaw === "bottle" ? "bottle" : shapeRaw === "scene" ? "scene" : "jar";
  const width = Math.min(Number(wRaw) || 1200, 2400);
  const height = Math.min(Number(hRaw) || 1500, 2400);
  const eyebrow = decodeURIComponent(eyebrowRaw || "Daily Origins").slice(0, 32);
  const title = decodeURIComponent(titleRaw || "Daily Origins").slice(0, 48);

  const art =
    shape === "bottle" ? bottle(fam) : shape === "scene" ? scene(fam) : jar(fam);
  const showLabel = shape !== "scene";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 1200 1500" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${fam.bg}"/>
      <stop offset="1" stop-color="${fam.tint}"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffffd8"/>
      <stop offset="0.5" stop-color="${fam.tint}cc"/>
      <stop offset="1" stop-color="#ffffffbb"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="1500" fill="url(#bg)"/>
  ${art}
  ${
    showLabel
      ? `<text x="600" y="730" text-anchor="middle" fill="${fam.lid}" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-style="italic">${escapeXml(
          title
        )}</text>
  <text x="600" y="800" text-anchor="middle" fill="#1c1a15" font-family="Inter, Arial, sans-serif" font-size="26" letter-spacing="9">${escapeXml(
          eyebrow.toUpperCase()
        )}</text>`
      : ""
  }
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
