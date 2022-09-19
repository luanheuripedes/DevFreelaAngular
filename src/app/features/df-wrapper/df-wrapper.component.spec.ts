import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfWrapperComponent } from './df-wrapper.component';

describe('DfWrapperComponent', () => {
  let component: DfWrapperComponent;
  let fixture: ComponentFixture<DfWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
