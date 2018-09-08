import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  check = true;
  constructor() { }

  ngOnInit() {

    $(window).scroll(() => {
      let scroolPosition = $(window).scrollTop();

      if (scroolPosition >= 1000 && this.check) {
        console.log('GİRDİ');

        $('.count1').each(function () {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
              duration: 3000,
              easing: 'swing',
              step: function (now) {
                $(this).text(Math.ceil(now));
              }
            });
        }); 
        this.check = false

      }

    })
  }

}
