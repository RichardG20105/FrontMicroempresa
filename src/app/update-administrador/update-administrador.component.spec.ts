import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdministradorComponent } from './update-administrador.component';

describe('UpdateAdministradorComponent', () => {
  let component: UpdateAdministradorComponent;
  let fixture: ComponentFixture<UpdateAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
