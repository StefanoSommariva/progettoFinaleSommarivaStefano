import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaDetailComponent } from './fattura-detail.component';

describe('FatturaDetailComponent', () => {
  let component: FatturaDetailComponent;
  let fixture: ComponentFixture<FatturaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
