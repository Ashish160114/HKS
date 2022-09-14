import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  api: string = 'https://api.publicapis.org/entries'
  dataList = []
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.http.get(this.api).subscribe((res: any) => {
      if (res) {
        this.dataList = res.entries
        console.log(this.dataList)
      }
    })
  }

  ngOnInit(): void {
  }


}
