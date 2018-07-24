import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: string =  'Search';
  searchList = '';
  articleList = [];
  totalCount = [];
  articleTotalCount: number;
  returnedArray = [];
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticleList().subscribe(data => {
      this.totalCount = data.json();
      this.articleTotalCount = this.totalCount.length;
      this.articleList = data.json().slice(0, 10);
    },
    error => {
      throw error;
    }) 
  }

  filterSearch(searchVal) {
    this.search = searchVal;
    this.articleList = [];
    this.articlesService.getArticleList().subscribe(data => {
      data.json().forEach(element => {
        if (element.technology == searchVal) {
          this.returnedArray.push(element);
          this.articleList = this.returnedArray.slice(0, 10);
        } else if(searchVal == 'all') {
          this.articleList.push(element);
        } else if (element.technology != searchVal) {
            if (this.articleList.length == 0) {
              console.log('No Search Found');
            }
        }
      });
    },
      error => {
        throw error;
      })
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    console.log(startItem + ' ' + endItem);
    this.articlesService.getArticleList().subscribe(data => {
      this.totalCount = data.json();
      this.articleList = data.json().slice(startItem, endItem);
    },
      error => {
        throw error;
      }) 
    
  }

}
