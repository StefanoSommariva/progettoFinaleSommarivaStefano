import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComuneComponent } from './detail-comune.component';

describe('DetailComuneComponent', () => {
  let component: DetailComuneComponent;
  let fixture: ComponentFixture<DetailComuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
