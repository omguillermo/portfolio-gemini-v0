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
          backgroundColor: "#f7f8f9",
          padding: "52px 64px",
          fontFamily: "Geist, sans-serif",
          boxSizing: "border-box",
          color: "#1f2024",
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
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img src={monogramSrc} width={32} height={32} style={{ width: 32, height: 32 }} />
            <span
              style={{
                fontFamily: "Geist",
                fontSize: 22,
                fontWeight: 700,
                color: "#1f2024",
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
              backgroundColor: "#ffffff",
              border: "1px solid #e4e4e7",
              padding: "7px 16px",
              borderRadius: 9999,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: "#16a34a",
              }}
            />
            <span style={{ fontFamily: "Geist", fontSize: 14, fontWeight: 600, color: "#16a34a" }}>
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
            marginTop: "16px",
            marginBottom: "16px",
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
              <img src={doodleSrc} width={72} height={72} style={{ width: 72, height: 72 }} />
            </div>

            <h1
              style={{
                fontFamily: "Sora",
                fontSize: 44,
                fontWeight: 800,
                color: "#1f2024",
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
                fontSize: 18,
                color: "#6b7280",
                margin: "18px 0 0 0",
                lineHeight: 1.5,
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
              width: "430px",
              backgroundColor: "#e7ebeb",
              borderRadius: "16px",
              border: "1px solid #d1d5db",
              padding: "24px 26px",
              fontSize: 13,
              fontFamily: "Geist Mono, monospace",
              color: "#27272a",
              boxSizing: "border-box",
            }}
          >
            {/* Window Controls */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "18px" }}>
              <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#d1d5db" }} />
              <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#d1d5db" }} />
              <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#d1d5db" }} />
            </div>

            <div style={{ display: "flex", color: "#374151", marginBottom: "16px", fontWeight: 700 }}>
              guest@omarguillermo.dev ~ % status
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: 13 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>LOCATION</span>
                <span style={{ color: "#1f2024", fontWeight: 600 }}>Mérida, MX</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>STATUS</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: "#16a34a" }} />
                  <span style={{ color: "#16a34a", fontWeight: 600 }}>Open to roles</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>VISA</span>
                <span style={{ color: "#1f2024", fontWeight: 600 }}>TN Eligible</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>MOBILITY</span>
                <span style={{ color: "#1f2024", fontWeight: 600 }}>Open to relocate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar: Geist "Personal Portfolio" on Left, Geist 600 URL on Right */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "20px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <span style={{ fontFamily: "Geist", fontSize: 15, fontWeight: 500, color: "#6b7280" }}>
            Personal Portfolio
          </span>
          <span style={{ fontFamily: "Geist", fontSize: 15, fontWeight: 600, color: "#1f2024", letterSpacing: "-0.01em" }}>
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
