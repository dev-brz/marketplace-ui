import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '../../../api';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'mkt-users-page',
  templateUrl: './users-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent {
  protected readonly apiUsers = toSignal(
    inject(UsersService).getUsers().pipe(map(res => res.users)),
    { initialValue: [] },
  );
}
