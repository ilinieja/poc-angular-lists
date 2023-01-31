import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesPageComponent {}