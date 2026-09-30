import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.join(
  __dirname,
  "../src/assets/hero-promo-office.webp"
);

const outputDir = path.join(
  __dirname,
  "../src/assets"
);

async function optimizeImages() {
  const metadata = await sharp(input).metadata();

  const sourceWidth = metadata.width;
  const sourceHeight = metadata.height;

  // Desktop hero
  // Match the original CSS:
  // object-fit: cover
  // object-position: 55% 22%

  const targetWidth = 1920;
  const targetHeight = 700;

  const cropHeight = Math.floor(
    sourceWidth * (targetHeight / targetWidth)
  );

  const maxTop = sourceHeight - cropHeight;

  const cropTop = Math.floor(maxTop * 0.22);

  await sharp(input)
    .extract({
      left: 0,
      top: cropTop,
      width: sourceWidth,
      height: cropHeight,
    })
    .resize(targetWidth, targetHeight)
    .webp({
      quality: 65,
      effort: 6,
    })
    .toFile(
      path.join(
        outputDir,
        "hero-promo-office-desktop.webp"
      )
    );

  // Mobile hero
  // Keep the version that already looks correct.

  await sharp(input)
    .resize(801, 1200, {
      fit: "cover",
      position: "centre",
    })
    .webp({
      quality: 65,
      effort: 6,
    })
    .toFile(
      path.join(
        outputDir,
        "hero-promo-office-mobile.webp"
      )
    );

  console.log("Hero images optimized successfully.");
}

optimizeImages().catch((error) => {
  console.error(error);
  process.exit(1);
});