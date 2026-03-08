import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './shared/service/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
  Message = "NOT LOADED"
  constructor(private homeService: Home, private cd: ChangeDetectorRef){
    homeService.getUsers().subscribe({
      next:(res:any)=>{
        this.Message = res['message'];
        cd.detectChanges();
      },
      error(err) {
        console.log(err);
      },
    });

  }
}
