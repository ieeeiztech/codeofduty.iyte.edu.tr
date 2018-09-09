import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TweenMax,TimelineMax } from 'gsap'
 
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  check = true;
  constructor() { }

  ngOnInit() {

    

    TweenMax.from('.headerText',1,{y:-100,opacity:1});
    TweenMax.from('.welcomingText',1,{y:100,opacity:0,delay:1.2});
    TweenMax.to('.btn-get-started',1,{opacity:1,delay:1.4});
    TweenMax.to('.btn-get-started',0.6,{scale:1.3,delay:2,repeat:-1})
     
     $(window).scroll(() => {
      const scroolPosition = $(window).scrollTop();
      console.log(scroolPosition);
      
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
        this.check = false;

      }

    });


    
  }

}
