import { Directive, OnDestroy } from '@angular/core';
import { Subject, MonoTypeOperatorFunction, takeUntil } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  autoCleanUp<T>(): MonoTypeOperatorFunction<T> {
    return takeUntil<T>(this.destroy$);
  }

  // autoCatchError(cb?: (error: IHttpErrorResponse) => void) {
  //   return catchError((error) => {
  //     cb?.(error as IHttpErrorResponse);

  //     return EMPTY;
  //   });
  // }
}

