import { TestBed } from '@angular/core/testing';

import { WordDataService } from './word-data.service';

describe('WordDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordDataService = TestBed.get(WordDataService);
    expect(service).toBeTruthy();
  });
});
