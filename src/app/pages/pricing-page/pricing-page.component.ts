import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss'
})
export default class PricingPageComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    console.log(this.platform);

    // if(isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing pages';
    // }
    
    
    
    this.title.setTitle('pricing pages');
    this.meta.updateTag({name: 'Description', content: 'Este es mi pricing page'});
    this.meta.updateTag({name: 'og:title', content: 'pricing page'});
    this.meta.updateTag({name: 'keywords', content: 'pricing page, azael, duarte, angular, pagina'});
  }

}
