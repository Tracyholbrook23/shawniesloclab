import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Source logo is 823x592. The flask mark (no wordmark text) sits within a
// 360x360 square starting at (250, 6) in the source image.
const SOURCE_WIDTH = 823;
const SOURCE_HEIGHT = 592;
const CROP_SIZE = 360;
const CROP_X = 250;
const CROP_Y = 6;

export default function AppleIcon() {
  const imageData = readFileSync(
    join(process.cwd(), "public/images/shawnie/favcon.JPEG")
  );
  const base64Image = `data:image/jpeg;base64,${imageData.toString("base64")}`;
  const scale = size.width / CROP_SIZE;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          background: "#fdf8fb",
        }}
      >
        <img
          src={base64Image}
          width={SOURCE_WIDTH * scale}
          height={SOURCE_HEIGHT * scale}
          style={{
            position: "absolute",
            left: -CROP_X * scale,
            top: -CROP_Y * scale,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
