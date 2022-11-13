import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title : String = "";
chat:any = []
chat2:any = []
person1chat(){
this.chat.push({"name":"person 1","message":this.title})
this.title = ""
}
person2chat(){
this.chat2.push({"name":"person 2","message":this.title})
this.title = ""
}
}
