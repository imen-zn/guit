import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTechComponent } from './profile-tech.component';

describe('ProfileTechComponent', () => {
  let component: ProfileTechComponent;
  let fixture: ComponentFixture<ProfileTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileTechComponent]
    });
    fixture = TestBed.createComponent(ProfileTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
