import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'af-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AngularFeedMainHomeComponent implements OnInit {

  dashboardData = [];

  language = 'js';
  hooks = {
  
  };
  interpolate = {
    language: 'language interpolated'
  };

  constructor(private dashboard: DashboardService) { }

  ngOnInit() {
    this.dashboard.getDashboardList().subscribe(data => {
      this.dashboardData = data.json();
    },
      error => {
        throw error;
      })
  }

}
