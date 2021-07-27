import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdministradorComponent } from './create-administrador.component';

describe('CreateAdministradorComponent', () => {
  let component: CreateAdministradorComponent;
  let fixture: ComponentFixture<CreateAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
