import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.css']
})
export class TubeComponent implements OnInit {

  video =[
    {
      pic:"assets/images/iphone.jpg",
    },
    {
      pic:"assets/images/tenet.jpg",
    },
    {
      pic:"https://www.91-cdn.com/hub/wp-content/uploads/2021/05/Battlegrounds_Mobile_India_PUBG_Mobile_India.jpg",
    },
    {
      pic:"assets/images/jd.jpg",
    },
    {
      pic:"assets/images/andaman.jpg",
    },
    
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
