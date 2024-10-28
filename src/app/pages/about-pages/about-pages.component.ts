import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-pages',
  standalone: true,
  imports: [],
  templateUrl: './about-pages.component.html',
  styleUrl: './about-pages.component.scss'
})
export default class AboutPagesComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About pages');
    this.meta.updateTag({name: 'Description', content: 'Este es mi about page'});
    this.meta.updateTag({name: 'og:title', content: 'About page'});
    this.meta.updateTag({name: 'keywords', content: 'About page, azael, duarte, angular, pagina'});
  }

}
