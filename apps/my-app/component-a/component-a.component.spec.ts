import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAComponent } from './component-a.component';

describe('ComponentAComponent', () => {
  let component: ComponentAComponent;
  let fixture: ComponentFixture<ComponentAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAComponent],
    });
    fixture = TestBed.createComponent(ComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
