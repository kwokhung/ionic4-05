import { TestBed, async, inject } from '@angular/core/testing';

import { SimplyPreventGuard } from './simply-prevent.guard';

describe('SimplyPreventGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimplyPreventGuard]
    });
  });

  it('should ...', inject([SimplyPreventGuard], (guard: SimplyPreventGuard) => {
    expect(guard).toBeTruthy();
  }));
});
