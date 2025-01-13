import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAcknowledgementComponent } from './payment-acknowledgement.component';

describe('PaymentAcknowledgementComponent', () => {
  let component: PaymentAcknowledgementComponent;
  let fixture: ComponentFixture<PaymentAcknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentAcknowledgementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
