import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  check = true;
  constructor() {}

  ngOnInit() {
    $("#portfolio img").on('click', (e) => {
      var val = ((e.target as HTMLImageElement).src.toString()).replace('http://localhost:4200/', '');
      this.image(val)
    });


    $(document).ready(function () {
      setTimeout(() => {
        $('.splashCont').hide()
      }, 3500);

      $(window).scrollTop(0);

      $('.closeNotification').click(function () {
        $('.panel').toggleClass('visible');

      });
      $('.notification-trigger').click(function () {
        $('.panel').toggleClass('visible');
      });

      $('.filter-active').click();

    });


    $(window).scroll(() => {
      const scroolPosition = $(window).scrollTop();

      if (scroolPosition >= 1550 && this.check) {

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


  image(path) {
    var modal = $('#myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = $("#img01");
    modal.css({
      'display': "block"
    });
    modalImg.attr('src', path)
  }

  unrender() {
    var modal = $('#myModal');
    modal.css({
      'display': "none"
    });

  }

  scroll(divName) {
    if (divName == "#footer") {
      $('html, body').animate({
        scrollTop: $(divName).offset().top - 200
      }, 700);
    } else {
      $('html, body').animate({
        scrollTop: $(divName).offset().top - 50
      }, 700);
    }
  }

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  getSponsor(test) {
    console.log(test)
  }
}
