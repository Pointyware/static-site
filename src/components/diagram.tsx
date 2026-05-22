
export interface DiagramProps {
  title: string;
  canvasId?: string;
  width?: number;
  height?: number;
}

export default function Diagram(props: DiagramProps) {
  const {
    title,
    canvasId = 'canvas',
    width = 400,
    height = 400
  } = props;
  const diagramLabelId = `${canvasId}-label`;
  return (
    <div>
      <h2 id={diagramLabelId}>{title}</h2>
      <canvas id={canvasId} role='application' width={width} height={height} aria-labelledby={diagramLabelId}>
        Your browser does not support the HTML5 canvas element.
      </canvas>
    </div>
  );
}
