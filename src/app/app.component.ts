import { Component } from '@angular/core';
export interface Language {
    value: string;
    viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    languages: Language[] = [
        { value: 'en', viewValue: 'English' },
        { value: 'sp', viewValue: 'Spanish' },
    ];
}
