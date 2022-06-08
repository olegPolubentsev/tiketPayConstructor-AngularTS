import {animate, group, query, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {bounceInDown, bounceOutUp} from "ng-animate";

export const boxAnimation = trigger('box', [
  state('start', style({ background: 'blue' })),
  state('end', style({
    background: 'rgba(255, 0, 0, 0.5)',
    //transform: 'scale(1.2)',
    borderRadius: '5px',
    margin: "12px 0px",
    width: '100%'
  })),
  state('special', style({
    background: 'orange',
    transform: 'scale(0.7)',
    borderRadius: '50%'
  })),
  transition('start => end', animate(150)),
  transition('end => start', animate('500ms ease-out')),
  transition('special <=> *', [
    style({background: 'green'}),
    animate('1000ms', style({background: 'pink',})),
    animate('1000ms')
  ]),
  transition(':enter', animate(1000)),
  transition(':leave',[
    group([                                             //чтобы работали параллельно иначе конфликтуют
      animate(1000, style({
        height: '0px',
        opacity: 0
      })),
      query('p', animate(200, style({   //чтобы обратиться к дочерним тегам
        color: 'black',
        fontWeight: 'bold'
      })))
    ])
  ])
])
export const bounceAnimation = trigger('bounce', [
  transition('void => *', useAnimation(bounceInDown,{params: { timing: 5, delay: 0}})),
  transition('* => void', useAnimation(bounceOutUp, {params: { timing: 5, delay: 0}}))
])
