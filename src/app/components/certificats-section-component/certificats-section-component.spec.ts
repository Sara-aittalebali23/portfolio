import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatsSectionComponent } from './certificats-section-component';

describe('CertificatsSectionComponent', () => {
  let component: CertificatsSectionComponent;
  let fixture: ComponentFixture<CertificatsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
