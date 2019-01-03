import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from 'src/app/elasticsearch.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  private static readonly INDEX = '.kibana_1';
  private static readonly TYPE = 'doc';
  private static readonly SIZE = 3;
 
  customerSources: any;
  haveNextPage = false;
  scrollID = '';
  notice = '';
  constructor(private es: ElasticsearchService) {
    this.scrollID = '';
    this.notice = '';
    this.haveNextPage = false;
   }

  ngOnInit() {

    this.es.getAllDocumentsWithScroll(
      DiscoverComponent.INDEX,
      DiscoverComponent.TYPE,
      DiscoverComponent.SIZE).then(
        response => {
          this.customerSources = response.hits.hits;
 
          if (response.hits.hits.length < response.hits.total) {
            this.haveNextPage = true;
            this.scrollID = response._scroll_id;
          }
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Show Customer Completed!');
        });
  }

  showNextPage() {
    this.es.getNextPage(this.scrollID).then(
      response => {
        this.customerSources = response.hits.hits;
        if (!response.hits.hits) {
          this.haveNextPage = false;
          this.notice = 'There are no more Customers!';
        }
        console.log(response);
      }, error => {
        console.error(error);
      }).then(() => {
        console.log('Show Customer Completed!');
      });
  }

}
