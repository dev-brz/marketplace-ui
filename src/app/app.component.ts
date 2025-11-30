import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { StompExampleService } from './stomp-example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  stompExample = inject(StompExampleService);

  ngOnInit(): void {
    this.stompExample.run();
  }
}
