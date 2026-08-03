import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { projectsData } from "@/data/projects";

export const alt = "Case Study | Omar Guillermo Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  const title = project?.archive_title || project?.title || "Case Study";
  const subtitle = project?.subtitle || "Product Design & Systems Architecture Case Study";
  
  // Split comma-separated tags into individual items
  const tags = (project?.tag || "UX / UI")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  // Load fonts & assets
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

  const monogramSvg = await readFile(
    join(process.cwd(), "public/oguillermo-monogram.svg"),
    "utf8"
  );
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
        {/* Header: Monogram + Name (Geist 700) on Left, Separate Tag Pills on Right */}
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

          {/* Multiple Separate Tag Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "Geist",
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  backgroundColor: "#e0f2fe",
                  color: "#0369a1",
                  border: "1px solid #bae6fd",
                  padding: "6px 14px",
                  borderRadius: 9999,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Main Case Study Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "960px",
            margin: "24px 0",
          }}
        >
          <div
            style={{
              fontFamily: "Geist",
              fontSize: 13,
              fontWeight: 600,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            CASE STUDY DEEP-DIVE
          </div>
          <h1
            style={{
              fontFamily: "Sora",
              fontSize: 46,
              fontWeight: 800,
              color: "#1f2024",
              margin: 0,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "Geist",
              fontSize: 20,
              color: "#52525b",
              margin: 0,
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Footer: Geist 500 Left Text ("Omar Guillermo - Senior Product Designer"), Geist 600 URL Right */}
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
          <span
            style={{
              fontFamily: "Geist",
              fontSize: 15,
              fontWeight: 500,
              color: "#6b7280",
            }}
          >
            Omar Guillermo - Senior Product Designer
          </span>
          <span
            style={{
              fontFamily: "Geist",
              fontSize: 15,
              fontWeight: 600,
              color: "#1f2024",
              letterSpacing: "-0.01em",
            }}
          >
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
      ],
    }
  );
}
