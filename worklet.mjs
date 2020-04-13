import {fourCorners} from './worklet/corners.mjs';
import type1, {type1a} from './worklet/type1.mjs';

/**
 * @typedef {{height: number; width: number}} Geometry
 */

/**
 * @typedef {(ctx: CanvasRenderingContext2D, geom: Geometry) => void} RenderFn
 */

/**
 * @typedef {(fn: RenderFn) => RenderFn} ModifierFn
 */

const types = {
  ...type1,
};

class Painter {
  static get inputProperties() {
    return ['--dnd-box-border', '--dnd-box-color', '--dnd-box-top', '--dnd-box-bottom',];
  }

  /**
   * @param {CanvasRenderingContext2D} ctx 
   * @param {{height: number; width: number}} geometry 
   * @param {unknown} properties 
   */
  paint(ctx, {height, width}, properties) {
    ctx.fillStyle = properties.get('--dnd-box-color')?.toString() ?? 'transparent';
    ctx.strokeStyle = properties.get('--dnd-box-border')?.toString() ?? 'black';

    const top = types[properties.get('--dnd-box-top')?.toString().trim()] ?? type1a;
    const bottom = types[properties.get('--dnd-box-bottom')?.toString().trim()] ?? top;

    fourCorners(top, bottom)(ctx, {height, width});
  }
}

registerPaint('dnd-box', Painter);