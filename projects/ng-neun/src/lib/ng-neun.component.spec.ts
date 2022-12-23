import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNeunComponent } from './ng-neun.component';

describe('NgNeunComponent', () => {
  let component: NgNeunComponent;
  let fixture: ComponentFixture<NgNeunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNeunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNeunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
