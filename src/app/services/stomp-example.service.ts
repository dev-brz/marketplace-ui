import { Injectable, OnDestroy } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { switchMap, timer } from 'rxjs';

/** Just an example to check websocket connection, to be removed in future */
@Injectable({ providedIn: 'root' })
export class StompExampleService implements OnDestroy {
  rxStomp = new RxStomp();

  run() {
    this.rxStomp.configure({
      brokerURL: 'ws://localhost:8080/ws',
    });

    this.rxStomp
      .watch({ destination: '/topic/chat/broadcast' })
      .subscribe(message => console.log(`Received ${message.body}`));

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
