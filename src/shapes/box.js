import Shape from './shape';

export default class Box extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    this.drawBox(0, 0);
    this.drawBox(halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }

  drawBox(offsetX, offsetY) {
    const size = this._size;
    const halfSize = size / 2;
    const gap = size / 20;

    this._context.strokeRect(offsetX + gap, offsetY + gap, halfSize - (gap * 4), halfSize - (gap * 4));

    this._context.closePath();
  }
}
