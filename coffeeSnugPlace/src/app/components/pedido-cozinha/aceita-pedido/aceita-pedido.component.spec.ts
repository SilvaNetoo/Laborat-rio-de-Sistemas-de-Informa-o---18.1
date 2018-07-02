import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitaPedidoComponent } from './aceita-pedido.component';

describe('AceitaPedidoComponent', () => {
  let component: AceitaPedidoComponent;
  let fixture: ComponentFixture<AceitaPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitaPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
