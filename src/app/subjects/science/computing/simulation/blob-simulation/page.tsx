'use client';

import SimulationView from "@/components/simulation-view";
import { Simulation } from "@/science/computing/simulation/simulation";
import { use, useEffect, useState } from "react";

export class BlobSimulationViewModel {

  constructor() {

  }

  onPressureChange(value: number) {
    console.log("Pressure changed to:", value);
  }
  
  onMinLengthChange(value: number) {
    console.log("Minimum Length changed to:", value);
  }
  
  onMaxLengthChange(value: number) {
    console.log("Maximum Length changed to:", value);
  }

  onPointerDown(x: number, y: number) {
    console.log("Pointer Down at:", x, y);
  }
  
  onPointerDrag(x: number, y: number) {
    console.log("Pointer Drag at:", x, y);
  }

  onPointerUp(x: number, y: number) {
    console.log("Pointer Up at:", x, y);
  }
  
  onKeyDown(key: string) {
    console.log("Key Down:", key);
  }

  onKeyUp(key: string) {
    console.log("Key Up:", key);
  }
  
  onWheel(deltaX: number, deltaY: number) {
    console.log("Wheel:", deltaX, deltaY);
  }
}

export default function BlobSimulationPage() {
  useEffect(() => {

    return () => console.info("Clean Up");
  }, []);
  const viewModel = useState(() => new BlobSimulationViewModel())[0];

  return (
    <main>
      <SimulationView canvasId="blob-simulation" width={800} height={600} 
        onPointerDown={viewModel.onPointerDown}
        onPointerDrag={viewModel.onPointerDrag}
        onPointerUp={viewModel.onPointerUp}
        onKeyDown={viewModel.onKeyDown}
        onKeyUp={viewModel.onKeyUp}
        onWheel={viewModel.onWheel} />
      <BlobControls />
    </main>
  )
}

interface BlobControlsProps {
  pressure?: number;
  minLength?: number;
  maxLength?: number;
  onPressureChange?: (value: number) => void;
  onMinLengthChange?: (value: number) => void;
  onMaxLengthChange?: (value: number) => void;
}
function BlobControls(props: BlobControlsProps) {
  return (
    <div>
      <h2>Controls</h2>
      <label htmlFor="pressure">Pressure</label>
      <input id="pressure" type="range" min="0" max="100" defaultValue="50" 
        value={props.pressure} 
        onChange={(e) => props.onPressureChange && props.onPressureChange(parseFloat(e.target.value))} />
      <label htmlFor="minLength">Minimum Length</label>
      <input id="minLength" type="range" min="0" max="100" defaultValue="10" 
        value={props.minLength} 
        onChange={(e) => props.onMinLengthChange && props.onMinLengthChange(parseFloat(e.target.value))} />
      <label htmlFor="maxLength">Maximum Length</label>
      <input id="maxLength" type="range" min="0" max="100" defaultValue="50" 
        value={props.maxLength} 
        onChange={(e) => props.onMaxLengthChange && props.onMaxLengthChange(parseFloat(e.target.value))} />
    </div>
  )
}