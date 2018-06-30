import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerPedidoComponent } from './fazer-pedido.component';

describe('FazerPedidoComponent', () => {
  let component: FazerPedidoComponent;
  let fixture: ComponentFixture<FazerPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazerPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
