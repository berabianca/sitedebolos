import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeEncontrarComponent } from './onde-encontrar.component';

describe('OndeEncontrarComponent', () => {
  let component: OndeEncontrarComponent;
  let fixture: ComponentFixture<OndeEncontrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndeEncontrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OndeEncontrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
