import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Omar Guillermo | Senior Product Designer & Design System Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Load local font TTF files
  const soraExtraBold = await readFile(
    join(process.cwd(), "public/fonts/Sora-ExtraBold.ttf")
  );
  const soraBold = await readFile(
    join(process.cwd(), "public/fonts/Sora-Bold.ttf")
  );
  const geistRegular = await readFile(
    join(process.cwd(), "public/fonts/Geist-Regular.ttf")
  );
  const geistMedium = await readFile(
    join(process.cwd(), "public/fonts/Geist-Medium.ttf")
  );
  const geistMonoRegular = await readFile(
    join(process.cwd(), "public/fonts/GeistMono-Regular.ttf")
  );
  const geistMonoMedium = await readFile(
    join(process.cwd(), "public/fonts/GeistMono-Medium.ttf")
  );

  // Load SVG graphics
  const doodleSvg = await readFile(
    join(process.cwd(), "public/2026-doodle-default.svg"),
    "utf8"
  );
  const monogramSvg = await readFile(
    join(process.cwd(), "public/oguillermo-monogram.svg"),
    "utf8"
  );

  const doodleSrc = `data:image/svg+xml;utf8,${encodeURIComponent(doodleSvg)}`;
  const monogramSrc = `data:image/svg+xml;utf8,${encodeURIComponent(monogramSvg)}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "54px 68px",
          fontFamily: "Geist, sans-serif",
          boxSizing: "border-box",
          color: "#09090b",
        }}
      >
        {/* Top Header: Monogram + Name (Geist 700) on Left, Open to Roles Pill on Right */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "24px",
            borderBottom: "1px solid #e4e4e7",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img src={monogramSrc} width={40} height={40} style={{ width: 40, height: 40 }} />
            <span
              style={{
                fontFamily: "Geist",
                fontSize: 26,
                fontWeight: 700,
                color: "#09090b",
                letterSpacing: "-0.05em",
              }}
            >
              Omar Guillermo
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#f4f4f5",
              border: "1px solid #e4e4e7",
              padding: "8px 18px",
              borderRadius: 9999,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#16a34a",
              }}
            />
            <span style={{ fontFamily: "Geist", fontSize: 15, fontWeight: 600, color: "#15803d" }}>
              Open to roles
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Left Column: Avatar + Sora Headline + Geist Subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "580px",
            }}
          >
            <div style={{ display: "flex", marginBottom: "18px" }}>
              <img src={doodleSrc} width={80} height={80} style={{ width: 80, height: 80 }} />
            </div>

            <h1
              style={{
                fontFamily: "Sora",
                fontSize: 48,
                fontWeight: 800,
                color: "#09090b",
                margin: 0,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Senior Product Designer & Design System Builder
            </h1>

            <p
              style={{
                fontFamily: "Geist",
                fontSize: 20,
                color: "#4b5563",
                margin: "18px 0 0 0",
                lineHeight: 1.45,
                fontWeight: 400,
              }}
            >
              Started in Photoshop. Today I think, design, prototype, and build — with AI as a sparring partner.
            </p>
          </div>

          {/* Right Column: Terminal Box Widget in Geist Mono */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "440px",
              backgroundColor: "#f3f4f6",
              borderRadius: "16px",
              border: "1px solid #d1d5db",
              padding: "24px 28px",
              fontSize: 15,
              fontFamily: "Geist Mono, monospace",
              color: "#1f2937",
              boxSizing: "border-box",
            }}
          >
            {/* Window Controls */}
            <div style={{ display: "flex", gap: "7px", marginBottom: "20px" }}>
              <div style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: "#d1d5db" }} />
              <div style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: "#d1d5db" }} />
              <div style={{ width: 11, height: 11, borderRadius: 6, backgroundColor: "#d1d5db" }} />
            </div>

            <div style={{ display: "flex", color: "#111827", marginBottom: "18px", fontWeight: 700, fontSize: 16 }}>
              guest@omarguillermo.dev ~ % status
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: 15 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>LOCATION</span>
                <span style={{ color: "#111827", fontWeight: 600 }}>Mérida, MX</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>STATUS</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#16a34a" }} />
                  <span style={{ color: "#15803d", fontWeight: 700 }}>Open to roles</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>VISA</span>
                <span style={{ color: "#111827", fontWeight: 600 }}>TN Eligible</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>MOBILITY</span>
                <span style={{ color: "#111827", fontWeight: 600 }}>Open to relocate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar: Crisp high-contrast Geist text */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            borderTop: "1px solid #e4e4e7",
          }}
        >
          <span style={{ fontFamily: "Geist", fontSize: 17, fontWeight: 500, color: "#4b5563" }}>
            Personal Portfolio
          </span>
          <span style={{ fontFamily: "Geist", fontSize: 17, fontWeight: 700, color: "#09090b", letterSpacing: "-0.01em" }}>
            omarguillermo.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Sora",
          data: soraExtraBold,
          style: "normal",
          weight: 800,
        },
        {
          name: "Sora",
          data: soraBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Geist Mono",
          data: geistMonoRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist Mono",
          data: geistMonoMedium,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
