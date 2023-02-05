import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSidenavComponent } from './doc-sidenav.component';

describe('DocSidenavComponent', () => {
  let component: DocSidenavComponent;
  let fixture: ComponentFixture<DocSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
