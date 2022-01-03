import { trigger, transition, style, animate } from '@angular/animations';

export function slideIn(
  direction: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' = 'RIGHT',
  duration: number = 500,
  fade: boolean = true
) {
  let transitionPositions = {
    x: {
      from: '0px',
      to: '0px',
    },
    y: {
      from: '0px',
      to: '0px',
    },
  };
  switch (direction) {
    case 'BOTTOM':
      transitionPositions.y.from = '-800px';
      transitionPositions.y.to = '0px';
      break;
    case 'LEFT':
      transitionPositions.x.from = '800px';
      transitionPositions.x.to = '0px';
      break;
    case 'RIGHT':
      transitionPositions.x.from = '-800px';
      transitionPositions.x.to = '0px';
      break;
    case 'TOP':
      transitionPositions.y.from = '800px';
      transitionPositions.y.to = '0px';
      break;
  }

  return trigger('slideIn', [
    transition(':enter', [
      style({
        opacity: fade ? 0 : 1,
        transform: `translate(${transitionPositions.x.from}, ${transitionPositions.y.from})`,
      }),
      animate(
        duration,
        style({
          opacity: 1,
          transform: `translate(${transitionPositions.x.to}, ${transitionPositions.y.to})`,
        })
      ),
    ]),
  ]);
}
