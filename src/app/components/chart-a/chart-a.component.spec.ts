import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAComponent } from './chart-a.component';

describe('ChartAComponent', () => {
  let component: ChartAComponent;
  let fixture: ComponentFixture<ChartAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
