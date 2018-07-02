import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarTerminoComponent } from './confirmar-termino.component';

describe('ConfirmarTerminoComponent', () => {
  let component: ConfirmarTerminoComponent;
  let fixture: ComponentFixture<ConfirmarTerminoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarTerminoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarTerminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
