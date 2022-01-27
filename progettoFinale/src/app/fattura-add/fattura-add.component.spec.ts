import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaAddComponent } from './fattura-add.component';

describe('FatturaAddComponent', () => {
  let component: FatturaAddComponent;
  let fixture: ComponentFixture<FatturaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
