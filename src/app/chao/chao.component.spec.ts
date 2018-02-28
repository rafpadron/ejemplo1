import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaoComponent } from './chao.component';

describe('ChaoComponent', () => {
  let component: ChaoComponent;
  let fixture: ComponentFixture<ChaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
