import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPodyCalculatorComponent } from './app-pody-calculator.component';

describe('AppPodyCalculatorComponent', () => {
  let component: AppPodyCalculatorComponent;
  let fixture: ComponentFixture<AppPodyCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPodyCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPodyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
