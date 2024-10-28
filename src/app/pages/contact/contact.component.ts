import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export default class ContactComponent implements OnInit{

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('contact pages');
    this.meta.updateTag({name: 'Description', content: 'Este es mi contact page'});
    this.meta.updateTag({name: 'og:title', content: 'contact page'});
    this.meta.updateTag({name: 'keywords', content: 'contact page, azael, duarte, angular, pagina'});
  }

}
