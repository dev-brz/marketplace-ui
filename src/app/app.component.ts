import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { StompExampleService } from './services/stomp-example.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mkt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  stompExample = inject(StompExampleService);

  ngOnInit(): void {
    this.stompExample.run();
  }
}
