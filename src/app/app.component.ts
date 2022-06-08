import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "./shared/auth.service";
import {animate, AnimationEvent, query, state, style, transition, trigger} from "@angular/animations";
import {bounceAnimation, boxAnimation} from "./app.animation";
import {Block} from "./shared/interfaces";

const modalAnimation = trigger('blockProfileUser', [
  state('void', style({
    opacity: '0%',
    height: '0px'
  })),
  state('*', style({
    opacity: '100%',
    height: '30px'
  })),
  transition('* <=> void', animate(200))
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation, bounceAnimation, modalAnimation]
})

export class AppComponent implements OnInit{

  title = 'educ_app_002'
  textButtonLogin = 'Войти'
  boxState = 'start'
  boxEnable = true
  bounceEnable = true

  blocks: Block[] = [
    {title: 'Информация', info: 'Информация о фестивале. Музыкальные группы, конкурсы, еда, напитки, развлечения и др.', id: 1, link: '/info'},
    {title: 'Регистрация', info: 'Удобный способ зарезервировать место проживания и онлайн купить билет на фестиваль', id: 2, link: '/pay'},
    {title: 'Контакты', info: 'Информация о месте и времени проведения фестиваля. Обратная связь с организаторами', id: 3, link: '/contact'},
  ]

  constructor(
    private route: ActivatedRoute,
    private rot: Router,
    public  authServ: AuthService

  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //console.log('parametrs: ',params)
    })

    this.route.queryParams.subscribe((qParam: Params) => {
      //console.log('quaryParams: ', qParam['part'])
    })

    this.route.fragment.subscribe(fragment => {
      //console.log('Fragment: ', fragment)
    })
  }

  clickMenuLinkInfo() {
    this.rot.navigate(['/info'],{ //так можно добавлять квери параметр програмно
      queryParams: {'part': 'number', 'data': 'bold'},
      fragment: 'anyData'
    })
  }

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

  animationStart( event: AnimationEvent) {

  }

  animationDone( event: AnimationEvent) {

  }

  anima() {
    this.bounceEnable = !this.bounceEnable
  }

  loginOutSubmit() {
    this.authServ.logOut()
    this.rot.navigate(['/index'])
  }
}
