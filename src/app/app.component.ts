import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecipeBook';
  loadedFeature = 'recipe';

  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }
}
