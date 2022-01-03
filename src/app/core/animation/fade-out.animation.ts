import { animate, style, transition, trigger } from '@angular/animations';

export function fadeOut(
  direction: '<=>' | '<=' | '>=' | '<=*' | '*=>' | 'void => *' | ':enter' | ':leave' = 'void => *',
  duration: number = 500
) {
  return trigger('fadeOut', [
    transition(direction, [
      style({ opacity: 1 }),
      animate(duration, style({ opacity: 0 })),
    ]),
  ]);
}
