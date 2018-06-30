import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGarcomComponent } from './login-garcom.component';

describe('LoginGarcomComponent', () => {
  let component: LoginGarcomComponent;
  let fixture: ComponentFixture<LoginGarcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGarcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGarcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
