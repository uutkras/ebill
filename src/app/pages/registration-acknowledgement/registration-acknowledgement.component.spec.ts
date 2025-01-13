import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAcknowledgementComponent } from './registration-acknowledgement.component';

describe('RegistrationAcknowledgementComponent', () => {
  let component: RegistrationAcknowledgementComponent;
  let fixture: ComponentFixture<RegistrationAcknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationAcknowledgementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
