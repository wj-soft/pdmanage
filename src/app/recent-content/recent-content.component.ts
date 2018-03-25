import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-recent-content',
  templateUrl: './recent-content.component.html',
  styleUrls: ['./recent-content.component.css']
})
export class RecentContentComponent implements OnInit {
  
  constructor(public http: HttpClient) { }

  ngOnInit() {
    
    this.http.get('http://localhost:3000')
      .subscribe((value) => {
        console.log(value)
      })
  }

}
