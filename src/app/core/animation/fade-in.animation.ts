import { animate, style, transition, trigger } from "@angular/animations";

export function fadeIn(direction: "<=>" | "<=" | ">=" | "<=*" | "*=>" | ':enter' | ':leave' | "void => *" = "void => *", duration: number = 500) {
    return trigger('fadeIn', [
        transition(direction, [
            style({ opacity: 0 }),
            animate(duration, style({opacity: 1}))
        ])
    ])
}