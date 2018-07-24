import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { timeout } from 'rxjs/operators';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-article-template',
  templateUrl: './article-template.component.html',
  styleUrls: ['./article-template.component.css']
})

export class ArticleTemplateComponent implements OnInit {
  language = 'js';
  hooks = {
  };
  interpolate = {
    language: 'language interpolated'
  };

  articles = [];
  articleLists = [];
  totalCount = [];
  pageId = location.hash.split('/')[2];
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getArticleByTitle(this.pageId).subscribe(data => {
      this.articles = data.json();
    },
      error => {
        throw error;
      }) 

    this.articlesService.getArticleList().subscribe(data => {
      this.totalCount = data.json();
      this.articleLists = data.json().slice(0, 10);
    },
      error => {
        throw error;
      })
  }

  articleClick() {
    
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.articlesService.getArticleList().subscribe(data => {
      this.totalCount = data.json();
      this.articleLists = data.json().slice(startItem, endItem);
    },
      error => {
        throw error;
      })

  }
}
