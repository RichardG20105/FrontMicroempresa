import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePuntoventaComponent } from './update-puntoventa.component';

describe('UpdatePuntoventaComponent', () => {
  let component: UpdatePuntoventaComponent;
  let fixture: ComponentFixture<UpdatePuntoventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePuntoventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePuntoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
