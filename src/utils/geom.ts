/*
 * Copyright (c) 2026 Taush Sampley
 * This software is released under the GPL-3.0 License.
 * See LICENSE file in the project root for full license information.
 * 
 * geom.ts - geometric primitives
 */

/**
 * A pair of numbers representing a width and height.
 */
export class Size {
  width:number
  height:number
  constructor(width:number,height:number) {
    this.width = width
    this.height = height
  }
}

/**
 * A pair of numbers representing a point in 2D space, x, y.
 */
export class Point {
  x:number
  y:number
  constructor(x:number=0,y:number=0) {
    this.x = x
    this.y = y
  }
}
