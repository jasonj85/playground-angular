import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'In a bar',
      url: 'https://media.istockphoto.com/photos/happy-friends-drinking-beer-at-brewery-bar-dehor-friendship-lifestyle-picture-id1300154551?k=20&m=1300154551&s=612x612&w=0&h=bdOxZ1EUInbZv4AadsVaYS6fErUws2sE7b1_gt_7J5E=',
    },
    {
      title: 'At the beach',
      url: 'https://media.istockphoto.com/photos/senior-man-working-on-his-laptop-lying-on-deck-chair-on-the-beach-picture-id1308090734?k=20&m=1308090734&s=612x612&w=0&h=RS1Yu_ZGMf2Py1-CVPRWTW32KcmhRu6vBBUIn_RxWO8=',
    },
    {
      title: 'Hiking a mountain',
      url: 'https://media.istockphoto.com/photos/young-couple-of-hikers-bound-up-ridge-together-picture-id1303216086?k=20&m=1303216086&s=612x612&w=0&h=BTS_0EbI3CKsnMyDo_SDSYICtHbfa563zeuatsSsyGc=',
    },
    {
      title: 'At a gym',
      url: 'https://media.istockphoto.com/photos/overhead-triceps-dips-with-a-dumbbell-picture-id1323475352?k=20&m=1323475352&s=612x612&w=0&h=T-PgxH4XKhRV3poYpvo2OkdlXuYPSbb_KXq8PHaKUhs=',
    },
    {
      title: 'Driving a car',
      url: 'https://media.istockphoto.com/photos/man-adjusting-a-rearview-mirror-picture-id623185866?k=20&m=623185866&s=612x612&w=0&h=Qw74WFLXvadfiRZazcspx4Or4zp2_l4LUNrl1bIwMWI=',
    },
  ];

  checkPageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
