import { animate, style, transition, trigger } from '@angular/animations';

export function fadeInOut(duration: number = 500) {
    return trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(duration, style({ opacity: 1 })),
        ]),
    
        transition(':leave', [
            style({ opacity: 1 }),
            animate(duration, style({opacity: 0}))
      ])
  ]);
}
