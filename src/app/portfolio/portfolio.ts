import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  readonly cvUrl = '/CV_SebastianVega.pdf';
  readonly email = 'Sebastian.vegar2015@gmail.com';
  readonly phone = '+57 313 389 0068';
  readonly location = 'Colombia';
}
