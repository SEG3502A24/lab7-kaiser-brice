import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterOutlet } from '@angular/router';
import { AuthorComponent } from './author/author.component';

export const authorRoutes: Routes = [
  { path: ':id', component: AuthorComponent },
];

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AuthorsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  submit(value: string): void {
    this.router
      .navigate(['./', value], { relativeTo: this.route })
      .then((r) => {});
  }
}
