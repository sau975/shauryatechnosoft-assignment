import { TestBed } from '@angular/core/testing';

import { DropdownBindingService } from './dropdown-binding.service';

describe('DropdownBindingService', () => {
  let service: DropdownBindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownBindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
