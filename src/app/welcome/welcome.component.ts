import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  //define variables here
  message = 'Some Welcome Message';
  name = '';
  //ActivatedRoute
  constructor(private route:ActivatedRoute) {

  }
  ngOnInit() {
    //COMPILATION ERROR - cannott reassign to int when previously defined as string,
    //typescript just KNOOWS what the type is without defining it
    // this.message = 5;
    console.log(this.message);
    this.name = this.route.snapshot.params['name'];
  }

}
