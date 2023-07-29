import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiskTaskComponent } from './lisk-task.component';

describe('LiskTaskComponent', () => {
  let component: LiskTaskComponent;
  let fixture: ComponentFixture<LiskTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiskTaskComponent]
    });
    fixture = TestBed.createComponent(LiskTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
