import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = 'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Teste';

}
