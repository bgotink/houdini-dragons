/**
 * @param {RenderFn} fn 
 * @returns {RenderFn}
 */
export function topLeft(fn) {
  return (ctx, geom) => {
    ctx.save();

    ctx.resetTransform();
    fn(ctx, geom);

    ctx.restore();
  };
}

/**
 * @param {RenderFn} fn 
 * @returns {RenderFn}
 */
export function topRight(fn) {
  return (ctx, geom) => {
    ctx.save();

    ctx.resetTransform();
    ctx.translate(geom.width, 0);
    ctx.scale(-1, 1);
    
    fn(ctx, geom);

    ctx.restore();
  }
}

/**
 * @param {RenderFn} fn 
 * @returns {RenderFn}
 */
export function bottomLeft(fn) {
  return (ctx, geom) => {
    ctx.save();

    ctx.resetTransform();
    ctx.translate(0, geom.height);
    ctx.scale(1, -1);
    
    fn(ctx, geom);

    ctx.restore();
  }
}

/**
 * @param {RenderFn} fn 
 * @returns {RenderFn}
 */
export function bottomRight(fn) {
  return (ctx, geom) => {
    ctx.save();

    ctx.resetTransform();
    ctx.translate(geom.width, geom.height);
    ctx.scale(-1, -1);
    
    fn(ctx, geom);

    ctx.restore();
  }
}

/**
 * @param {RenderFn} top
 * @param {RenderFn} bottom
 * @returns {RenderFn}
 */
export function fourCorners(top, bottom = top) {
  return (ctx, geom) => {
    topLeft(top)(ctx, geom);
    topRight(top)(ctx, geom);
    bottomLeft(bottom)(ctx, geom);
    bottomRight(bottom)(ctx, geom);
  }
}
