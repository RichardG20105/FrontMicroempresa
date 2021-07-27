import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePuntoventaComponent } from './create-puntoventa.component';

describe('CreatePuntoventaComponent', () => {
  let component: CreatePuntoventaComponent;
  let fixture: ComponentFixture<CreatePuntoventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePuntoventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePuntoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
