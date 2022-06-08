import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserPost, UsersService} from "./users.service";



@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  constructor(private userService: UsersService) { }

  users: UserPost[] = []
  newName: string
  loading = false
  error = ''
  numGetUsers = 3

  forms: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(2),
      Validators.required])
  })

  ngOnInit(): void {
    this.error = ''
    this.loading = true
    this.userService.fetchUser(this.numGetUsers).subscribe(response => {
        this.users = response
        this.loading = false
      },(error) =>{
      //console.log('Error(addUser)',error)
      this.error = error.message
    })
  }

  addUser() {
    if(!this.newName.trim()){
      return
    }
    const newUser: UserPost = {
      name: this.newName,
      username: 'user_'+this.newName,
      email: this.newName+'@gmail.com'
    }
    this.error = ''
    this.loading = true
    this.userService.addUser(newUser).subscribe(user => {
      this.users.push(user)
      this.newName = ''
      this.loading = false
      this.forms.reset()
    },(error) =>{
      //console.log('Error(addUser)',error)
      this.error = error.message
    })

    console.log(this.users)
  }

  dellUser(id: number = 0) {
    this.userService.dellUser(id).subscribe( () => {
      this.users = this.users.filter(el => el.id !== id)
    },(error) =>{
      //console.log('Error(addUser)',error)
      this.error = error.message
    })
  }
}
