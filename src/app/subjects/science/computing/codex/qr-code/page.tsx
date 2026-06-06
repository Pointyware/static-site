
export default function QrCodePage() {

  // TODO: add last updated; date: 2026-05-30 1000 -0500

  return (
    <main>
      <QrCodeView />
    </main>
  )
}

interface QrCodeViewProps {
  width?: number;
  height?: number;
}
function QrCodeView({ width = 400, height = 400 }: QrCodeViewProps) {
  return (
    <canvas width={width} height={height} id='canvas-qr'>
    Your browser does not support canvas.
    </canvas>
  )
}
