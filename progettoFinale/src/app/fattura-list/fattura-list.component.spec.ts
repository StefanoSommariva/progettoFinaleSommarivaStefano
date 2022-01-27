import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaListComponent } from './fattura-list.component';

describe('FatturaListComponent', () => {
  let component: FatturaListComponent;
  let fixture: ComponentFixture<FatturaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
