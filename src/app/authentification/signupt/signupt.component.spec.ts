import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuptComponent } from './signupt.component';

describe('SignuptComponent', () => {
  let component: SignuptComponent;
  let fixture: ComponentFixture<SignuptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignuptComponent]
    });
    fixture = TestBed.createComponent(SignuptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
