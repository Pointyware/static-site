/*
 * Copyright (c) 2026 Pointyware LLC. All rights reserved.
 * This software is released under the GPL-3.0 License.
 * See LICENSE file in the project root for full license information.
 * 
 * render.ts
 */

/**
 * 
 */
export abstract class Render2D<Subject> {
  /**
   * Draws the environment to the canvas context.
   * 
   * @param context HTML Canvas simple context.
   * @param subject The subject to render.
   * @param offset Seconds offset since the last calculation frame.
   */
  abstract render(context:CanvasRenderingContext2D,subject:Subject,offset:number): void
}

/**
 * 
 */
export abstract class Render3D<Subject> {
  /**
   * Draws the environment to the webgl context.
   * 
   * @param context HTML Canvas WebGL 2 Context.
   * @param subject The subject to render.
   * @param offset Seconds offset since the last calculation frame.
   */
  abstract render(context:WebGL2RenderingContext,subject:Subject,offset:number): void
}
