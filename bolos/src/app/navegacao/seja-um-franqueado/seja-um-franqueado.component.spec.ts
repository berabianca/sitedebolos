import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejaUmFranqueadoComponent } from './seja-um-franqueado.component';

describe('SejaUmFranqueadoComponent', () => {
  let component: SejaUmFranqueadoComponent;
  let fixture: ComponentFixture<SejaUmFranqueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejaUmFranqueadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SejaUmFranqueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
