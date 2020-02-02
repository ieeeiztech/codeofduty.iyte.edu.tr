 import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cod';
  ngOnInit() {
    setTimeout(function() {
      var x = document.querySelector('.spinner') as HTMLElement
      x.style.display = "none";
    }, 4200);
  }
}

