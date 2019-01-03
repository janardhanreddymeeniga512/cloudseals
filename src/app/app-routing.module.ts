import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ChartComponent } from 'src/app/chart/chart.component';
import { TestEsComponent } from 'src/app/test-es/test-es.component';
import { DiscoverComponent } from 'src/app/discover/discover.component';

const routes: Routes = [
  {
    path: '',            //<---- parent component declared here
    component: TestEsComponent,
    children: [                          //<---- child components declared here
        {
            path:'chart',
            component: ChartComponent
        },
        {
          path:'discover',
          component: DiscoverComponent
      },
    ]
},
{ path: '',   redirectTo: '/chart', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
