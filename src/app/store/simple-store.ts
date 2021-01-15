import { BehaviorSubject } from 'rxjs';

export class SimpleStore<T> {
  private state$: BehaviorSubject<T>;

  constructor(defaultValue: T) {
    this.state$ = new BehaviorSubject(defaultValue);
  }

  getState$() {
    return this.state$.asObservable();
  }

  patchState(partialState: Partial<T>) {
    const existingState = this.state$.value;
    const newState = { ...existingState, ...partialState };
    this.state$.next(newState);
  }
}
