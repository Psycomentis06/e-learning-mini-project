import { TestBed } from '@angular/core/testing';

import { ThemeModalService } from './theme-modal.service';

describe('ThemeModalService', () => {
  let service: ThemeModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
