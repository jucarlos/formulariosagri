import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectoresComponent } from './selectores.component';

describe('SelectoresComponent', () => {
  let component: SelectoresComponent;
  let fixture: ComponentFixture<SelectoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectoresComponent]
    });
    fixture = TestBed.createComponent(SelectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
