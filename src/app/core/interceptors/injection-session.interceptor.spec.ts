import { TestBed } from '@angular/core/testing';

import { InjectionSessionInterceptor } from './injection-session.interceptor';

describe('InjectionSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectionSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectionSessionInterceptor = TestBed.inject(InjectionSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
