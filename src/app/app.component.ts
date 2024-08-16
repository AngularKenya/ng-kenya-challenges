import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from './services/data.service';
import { Character } from './model/character.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-kenya-challenges';
  characters: Character[] = [];

  private destroyRef = inject(DestroyRef); 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCharacters()
      .pipe(takeUntilDestroyed(this.destroyRef)) 
      .subscribe(data => {
        this.characters = data;
      });
  }
}
