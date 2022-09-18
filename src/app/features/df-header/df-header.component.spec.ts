import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfHeaderComponent } from './df-header.component';

describe('DfHeaderComponent', () => {
  let component: DfHeaderComponent;
  let fixture: ComponentFixture<DfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
