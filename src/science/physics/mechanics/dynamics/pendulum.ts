/*
 * Copyright (c) 2026 Pointyware LLC. All rights reserved.
 * This software is released under the GPL-3.0 License.
 * See LICENSE file in the project root for full license information.
 * 
 * pendulum.ts
 */

import { Entity } from "@/science/computing/simulation/entity"
import { Environment } from "@/science/computing/simulation/environment"
import { Render2D } from "@/science/computing/simulation/render"
import { Point } from "@/utils/geom"

/**
 * 
 * TODO: create other pendulums
 *   - charged pendulum: weight also affected by charge
 *   - stiff pendulum: weight at fixed radius from anchor
 *   - rope pendulum: weight at max radius from anchor
 *   - spring pendulum: weight on spring
 */
export class Pendulum extends Entity {
   length:number
   angle:number
   angularVelocity:number
  /**
   * 
   * @param x Anchor x-coordinate.
   * @param y Anchor y-coordinate.
   * @param length Pendulum rope length.
   * @param startAngle Pendulum weight starting position relative to 
   * the anchor.
   * @param angularVelocity Pendulum weight starting angular velocity.
   */
  constructor(x:number,y:number,length:number,startAngle:number,angularVelocity:number) {
    super(new Point(x,y), new Point(0,0))
    this.length = length
    this.angle = startAngle
    this.angularVelocity = angularVelocity
  }

  /**
   * 
   * @param dt 
   */
  step(dt:number) {
    // const environment:Environment
    // const angularAccel = environment.gravity * Math.cos(this.angle)
    const angularAccel = 0.5 * Math.cos(this.angle)

    this.angularVelocity += angularAccel * dt

    this.angle += this.angularVelocity * dt
  }
}

/**
 * Renders a {@codelink Pendulum} in a 2D context.
 */
export class PendulumRender extends Render2D<Pendulum> {
  /**
   * 
   * @param context 
   * @param subject The subject to render.
   */
  render(context:CanvasRenderingContext2D, subject:Pendulum) {
    const weightX = Math.cos(subject.angle) * subject.length
    const weightY = Math.sin(subject.angle) * subject.length

    // draw rope
    context.strokeStyle = "white"
    context.moveTo(subject.position.x, subject.position.y)
    context.lineTo(weightX, weightY)
    context.stroke()
    // draw anchor
    context.fillStyle = "white"
    context.ellipse(subject.position.x, subject.position.y, 10, 10, 0, 0, Math.PI*2)
    context.fill()
    // draw weight
    context.fillStyle = "white"
    context.ellipse(weightX, weightY, 20, 20, 0, 0, 2*Math.PI)
    context.fill()
  }
}
