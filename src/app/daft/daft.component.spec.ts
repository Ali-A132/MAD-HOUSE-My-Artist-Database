import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftComponent } from './daft.component';

describe('DaftComponent', () => {
  let component: DaftComponent;
  let fixture: ComponentFixture<DaftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
