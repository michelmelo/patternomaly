import Shape from './shape';

export default class Diagonal extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    this.drawDiagonalLine(0, 0);
    this.drawDiagonalLine(halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }

  drawDiagonalLine(offsetX, offsetY) {
    const size = this._size;
    const halfSize = size / 2;
    const gap = 1;

    this._context.moveTo((halfSize - gap) - offsetX, (gap * -1) + offsetY);
    this._context.lineTo((size + 1) - offsetX, (halfSize + 1) + offsetY);

    this._context.closePath();
  }
}
