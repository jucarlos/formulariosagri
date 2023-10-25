import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicosComponent } from './dinamicos.component';

describe('DinamicosComponent', () => {
  let component: DinamicosComponent;
  let fixture: ComponentFixture<DinamicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinamicosComponent]
    });
    fixture = TestBed.createComponent(DinamicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
