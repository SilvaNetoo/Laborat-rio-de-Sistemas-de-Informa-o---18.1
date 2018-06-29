import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCozinheiroComponent } from './login-cozinheiro.component';

describe('LoginCozinheiroComponent', () => {
  let component: LoginCozinheiroComponent;
  let fixture: ComponentFixture<LoginCozinheiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCozinheiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCozinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
