import { TestBed } from '@angular/core/testing';

import { CartLogicService } from './cart-logic.service';

describe('CartLogicService', () => {
  let service: CartLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
