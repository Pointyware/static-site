import { useRef } from "react";


export interface SimulationViewProps {
  canvasId: string;
  width?: number;
  height?: number;
  onSelectTool?: (tool: string) => void;
  onPointerDown: (x:number, y:number)=>void;
  onPointerDrag: (x:number, y:number)=>void;
  onPointerUp: (x:number,y:number)=>void;
  onKeyDown: (key: string) => void;
  onKeyUp: (key: string) => void;
  onWheel: (deltaX: number, deltaY: number) => void;
}

export default function SimulationView(props: SimulationViewProps) {
  const {
    canvasId,
    width = 800,
    height = 600,
    onPointerDown,
    onPointerDrag,
    onPointerUp,
    onKeyDown,
    onKeyUp,
    onWheel
  } = props;

  const mouseDown = useRef(false);

  return (
    <canvas id={canvasId} width={width} height={height} style={{ border: '1px solid black' }}
      onMouseDown={(e)=>{
        const event = e.nativeEvent;
        onPointerDown(event.offsetX, event.offsetY);
        mouseDown.current = true;
      }}
      onMouseMove={(e)=>{
        const event = e.nativeEvent;
        if (mouseDown.current) {
          onPointerDrag(event.offsetX, event.offsetY);
        }
      }}
      onMouseUp={(e)=>{
        const event = e.nativeEvent;
        onPointerUp(event.offsetX, event.offsetY);
        mouseDown.current = false;
      }}
      onKeyDown={(e)=>{
        onKeyDown(e.key);
      }}
      onKeyUp={(e)=>{
        onKeyUp(e.key);
      }}
      onWheel={(e)=>{
        onWheel(e.deltaX, e.deltaY);
      }} >
      Your browser does not support the HTML5 canvas element.
    </canvas>
  )
}
