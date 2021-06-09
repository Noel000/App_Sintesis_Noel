import { TestBed } from '@angular/core/testing';

import { PractiquesService } from './practiques.service';

describe('PractiquesService', () => {
  let service: PractiquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PractiquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
