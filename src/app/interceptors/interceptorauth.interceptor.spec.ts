import { TestBed } from '@angular/core/testing';

import { InterceptorauthInterceptor } from './interceptorauth.interceptor';

describe('InterceptorauthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorauthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorauthInterceptor = TestBed.inject(InterceptorauthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
