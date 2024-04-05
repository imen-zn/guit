import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTechnicienComponent } from './signup-technicien.component';

describe('SignupTechnicienComponent', () => {
  let component: SignupTechnicienComponent;
  let fixture: ComponentFixture<SignupTechnicienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupTechnicienComponent]
    });
    fixture = TestBed.createComponent(SignupTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
