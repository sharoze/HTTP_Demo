import { TestBed } from '@angular/core/testing';

import { SimpleJSONServiceService } from './simple-jsonservice.service';

describe('SimpleJSONServiceService', () => {
  let service: SimpleJSONServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleJSONServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
