import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportComponent } from "./report/report.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Greport';
}
