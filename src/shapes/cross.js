import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function cross (size, backgroundColor) {
  const shape = generateShape(size, backgroundColor);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(1, 1);
  shape.context.lineTo(9, 9);
  shape.context.moveTo(1, 9);
  shape.context.lineTo(9, 1);

  shape.context.moveTo(11, 11);
  shape.context.lineTo(19, 19);
  shape.context.moveTo(11, 19);
  shape.context.lineTo(19, 11);
  shape.context.stroke();

  return shape.canvas;
}
