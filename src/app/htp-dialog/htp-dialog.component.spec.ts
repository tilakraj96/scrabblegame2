import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtpDialogComponent } from './htp-dialog.component';

describe('HtpDialogComponent', () => {
  let component: HtpDialogComponent;
  let fixture: ComponentFixture<HtpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
