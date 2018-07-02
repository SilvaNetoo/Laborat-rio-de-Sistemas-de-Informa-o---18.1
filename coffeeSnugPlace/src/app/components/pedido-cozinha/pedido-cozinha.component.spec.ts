import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCozinhaComponent } from './pedido-cozinha.component';

describe('PedidoCozinhaComponent', () => {
  let component: PedidoCozinhaComponent;
  let fixture: ComponentFixture<PedidoCozinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoCozinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
