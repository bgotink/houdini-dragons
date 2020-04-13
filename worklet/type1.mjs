/**
 * Type 1 boxes have two vertical border lines and a single horizontal border line.
 * 
 * The vertical lines are:
 * - 5px wide at 15px from the edge
 * - 2px wide at 27px from the edge
 * 
 * The horizontal line is:
 * - 5px wide at 0px from the edge
 * 
 * All corners are translated 2.5px in both horizontal and vertical direction because
 * line coordinates are the center of the line. In other words: otherwise we'd have to
 * add 2.5 to all coordinates to ensure half of the line doesn't get cut off.
 */


/**
 * @typedef {{height: number; width: number}} Geometry
 */

/**
 * @typedef {(ctx: CanvasRenderingContext2D, geom: Geometry) => void} RenderFn
 */

/**
 * @typedef {(fn: RenderFn) => RenderFn} ModifierFn
 */

/**
 * Draws a top-left type 1a corner
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Geometry} geom
 */
export function type1a(ctx, geom) {
  ctx.translate(17.5, 2.5);

  const clip = new Path2D();
  clip.moveTo(0, geom.height / 2);
  clip.lineTo(0, 100);
  clip.arcTo(0, 0, 100, 0, 80);
  clip.lineTo(geom.width / 2, 0);
  clip.lineTo(geom.width / 2, geom.height / 2);
  clip.closePath();

  ctx.save();
  ctx.clip(clip);
  ctx.beginPath();
  ctx.rect(12, 0, geom.width / 2 - 12, geom.height / 2);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 5;

  ctx.moveTo(geom.width / 2, 0);
  ctx.lineTo(25, 0);
  ctx.arcTo(20, 20, 0, 25, 30);
  ctx.lineTo(0, 25); // not sure why this is needed, but it is
  ctx.lineTo(0, geom.height / 2);
  ctx.moveTo(0, 100);
  ctx.arcTo(0, 0, 100, 0, 80);

  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 2;

  ctx.moveTo(12, geom.height / 2);
  ctx.lineTo(12, 38);

  ctx.stroke();
}

/**
 * Draws a top-left type 1b corner
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Geometry} geom
 */
export function type1b(ctx, geom) {
  ctx.translate(2.5, 2.5);

  const clip1 = new Path2D();
  clip1.moveTo(27, geom.height / 2);
  clip1.lineTo(27, 130);
  clip1.arcTo(27, 110, 15, 40, 40);
  clip1.lineTo(17, 40); // not 15 because then we see the end poking out
  clip1.lineTo(geom.width / 2, 40);
  clip1.lineTo(geom.width / 2, geom.height / 2);
  clip1.closePath();

  const clip2 = new Path2D();
  clip2.moveTo(geom.width / 2, 0);
  clip2.lineTo(50, 0);
  clip2.arcTo(45, 30, 25, 35, 40);
  clip2.lineTo(5, 40);
  clip2.lineTo(geom.width / 2, 40);
  clip2.closePath();

  ctx.save();
  ctx.clip(clip1);
  ctx.beginPath();
  ctx.rect(0, 40, geom.width / 2, geom.height / 2 - 40);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.clip(clip2);
  ctx.beginPath();
  ctx.rect(15, 0, geom.width / 2 - 15, 40);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 5;

  ctx.moveTo(geom.width / 2, 0);
  ctx.lineTo(40, 0);
  ctx.arcTo(35, 20, 15, 25, 30);
  ctx.lineTo(15, geom.height / 2);
  
  ctx.stroke();
  
  ctx.beginPath();
  ctx.lineWidth = 3;

  ctx.moveTo(50, 0);
  ctx.arcTo(45, 30, 25, 35, 40);
  ctx.lineTo(5, 40);
  ctx.arcTo(5, 70, 15, 130, 50);
  ctx.lineTo(17, 130); // not 15 because then we see the end poking out

  ctx.stroke();
  
  ctx.beginPath();
  ctx.lineWidth = 2;

  ctx.moveTo(27, geom.height / 2);
  ctx.lineTo(27, 130);
  ctx.arcTo(27, 110, 15, 40, 40);
  ctx.lineTo(17, 40); // not 15 because then we see the end poking out
  ctx.stroke();
}

/**
 * Draws a top-left type 1c corner
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Geometry} geom
 */
export function type1c(ctx, geom) {
  ctx.translate(2.5, 2.5);

  const clip1 = new Path2D();
  clip1.moveTo(27, geom.height / 2);
  clip1.lineTo(27, 130);
  clip1.arcTo(27, 110, 15, 40, 40);
  clip1.lineTo(17, 40); // not 15 because then we see the end poking out
  clip1.lineTo(geom.width / 2, 40);
  clip1.lineTo(geom.width / 2, geom.height / 2);
  clip1.closePath();

  const clip2 = new Path2D();
  clip2.moveTo(geom.width / 2, 0);
  clip2.lineTo(70, 0);
  clip2.arcTo(5, 40, 5, 100, 100);
  clip2.lineTo(5, 100);
  clip2.lineTo(geom.width / 2, 100);
  clip2.closePath();

  ctx.save();
  ctx.clip(clip1);
  ctx.beginPath();
  ctx.rect(0, 40, geom.width / 2, geom.height / 2 - 40);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.clip(clip2);
  ctx.beginPath();
  ctx.rect(15, 0, geom.width / 2 - 15, 40);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 5;

  ctx.moveTo(geom.width / 2, 0);
  ctx.lineTo(40, 0);
  ctx.arcTo(35, 20, 15, 25, 30);
  ctx.lineTo(15, 130);
  ctx.lineTo(15, geom.height / 2);
  
  ctx.stroke();
  
  ctx.beginPath();
  ctx.lineWidth = 3;
  
  ctx.moveTo(70, 0);
  ctx.arcTo(5, 40, 5, 100, 100);
  ctx.lineTo(5, 100);
  ctx.arcTo(15, 100, 15, 130, 10);
  ctx.lineTo(15, 130);
  
  ctx.stroke();
  
  ctx.beginPath();
  ctx.lineWidth = 2;
  
  ctx.moveTo(27, geom.height / 2);
  ctx.lineTo(27, 130);
  ctx.arcTo(27, 110, 15, 40, 40);
  ctx.lineTo(17, 40); // not 15 because then we see the end poking out
  
  ctx.stroke();
}

/**
 * Draws a top-left type 1d corner
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Geometry} geom
 */
export function type1d(ctx, geom) {
  ctx.translate(2.5, 2.5);

  const clip1 = new Path2D();
  clip1.moveTo(27, geom.height / 2);
  clip1.lineTo(27, 130);
  clip1.arcTo(27, 110, 15, 40, 40);
  clip1.lineTo(17, 40); // not 15 because then we see the end poking out
  clip1.lineTo(geom.width / 2, 40);
  clip1.lineTo(geom.width / 2, geom.height / 2);
  clip1.closePath();

  const clip2 = new Path2D();
  clip2.moveTo(geom.width / 2, 0);
  clip2.lineTo(80, 0);
  clip2.arcTo(60, 12, 46.5, 12, 60);
  clip2.lineTo(47.5, 12);
  clip2.arcTo(31, 12, 30, 0, 16);
  clip2.lineTo(30, 0);
  clip2.lineTo(15, 0);
  clip2.lineTo(15, 40);
  clip2.lineTo(geom.width / 2, 40);
  clip2.closePath();

  ctx.save();
  ctx.clip(clip1);
  ctx.beginPath();
  ctx.rect(0, 40, geom.width / 2, geom.height / 2 - 40);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.clip(clip2);
  ctx.beginPath();
  ctx.rect(15, 0, geom.width / 2 - 15, 40);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 5;
  
  ctx.moveTo(geom.width / 2, 0);
  ctx.lineTo(80, 0);
  ctx.arcTo(60, 12, 46.5, 12, 60);
  ctx.lineTo(47.5, 12);
  ctx.arcTo(31, 12, 30, 0, 16);
  ctx.lineTo(30, 0);
  ctx.lineTo(15, 0);
  ctx.lineTo(15, geom.height / 2);

  ctx.moveTo(47.5, 12);
  ctx.ellipse(47.5, 12, 2.5, 2.5, 0, 0, 2 * Math.PI);
  
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 2;
  
  ctx.moveTo(27, geom.height / 2);
  ctx.lineTo(27, 130);
  ctx.arcTo(27, 110, 15, 40, 40);
  ctx.lineTo(17, 40); // not 15 because then we see the end poking out
  
  ctx.stroke();
}

export default {type1a, type1b, type1c, type1d};