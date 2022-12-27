import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: NeButtonComponent;
  let fixture: ComponentFixture<NeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
