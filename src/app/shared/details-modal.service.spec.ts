import { TestBed } from '@angular/core/testing';

import { DetailsModalService } from './details-modal.service';

describe('DetailsModalService', () => {
  let service: DetailsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
