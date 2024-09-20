export const generateSizesAndWidths = (
  width: number,
  height: number,
  minWidth = 320,
  maxWidth?: number,
) => {
  const aspectRatio = height > width ? width / height : height / width
  const widthArray = maxWidth
    ? Array.from({ length: Math.ceil(maxWidth / 320) }).map(
        (_, i) => (i + 1) * 320,
      )
    : [320, 480, 640, 800, 960, 1120, 1280, 1440, 1600, 1920]
  const filteredWidthArray = maxWidth
    ? widthArray.filter((w) => w <= maxWidth)
    : widthArray.filter((w) => w >= minWidth)
  const widths = filteredWidthArray.map((w) => Math.round(w * aspectRatio))
  const sizes = filteredWidthArray.map((w) => `${w}px`).join(', ')
  const w = Math.round(width * aspectRatio)
  const h = Math.round(height * aspectRatio)
  return { width: w, height: h, widths, sizes }
}
