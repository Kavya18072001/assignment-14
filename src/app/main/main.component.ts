import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  data:any=[];
  constructor(private userservice:UserService){};

  ngOnInit() {
    this.userservice.newSource.subscribe(val =>this.data=val);
  }
 
}
