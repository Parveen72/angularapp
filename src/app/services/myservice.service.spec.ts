import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './myservice.service';

describe('MyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyServiceService = TestBed.get(MyServiceService);
    expect(service).toBeTruthy();
  });
});
