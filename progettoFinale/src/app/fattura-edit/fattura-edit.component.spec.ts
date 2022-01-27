import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaEditComponent } from './fattura-edit.component';

describe('FatturaEditComponent', () => {
  let component: FatturaEditComponent;
  let fixture: ComponentFixture<FatturaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
