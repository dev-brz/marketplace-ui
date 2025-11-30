import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  rxStomp = new RxStomp();

  ngOnInit(): void {
    this.rxStomp.configure({
      brokerURL: 'ws://localhost:8080/ws',
    });
    
    this.rxStomp
      .watch({ destination: "/topic/chat/broadcast" })
      .subscribe((message) => console.log(`Received ${message.body}`));

    this.rxStomp.connected$
      .pipe(switchMap(() => timer(3000)))
      .subscribe(() => {
        const frame = {
          destination: '/app/chat',
          body: JSON.stringify({ content: 'hello world' }),
        };
        this.rxStomp.publish(frame);
      });

    this.rxStomp.activate();
  }

  ngOnDestroy(): void {
    this.rxStomp.deactivate();
  }
}
