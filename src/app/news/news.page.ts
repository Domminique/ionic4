import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
    //  5a86a1588d5c46cbaf14bfbc957e76d7  <= my  News.org api key
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
   data: any;
  constructor(private newService: NewsService,
             private router: Router) { }

  ngOnInit() {

    this.newService.getData('top-headlines?sources= techcrunch' )
    .subscribe(data => {

      this.data = data;
    });
  }

  onGoToSinglePage(article): void {
     this.newService.currentArticle = article;
    this.router.navigate(['/news-single']);

  }

}
