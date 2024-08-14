import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconedNavComponent } from './seconed-nav.component';

describe('SeconedNavComponent', () => {
  let component: SeconedNavComponent;
  let fixture: ComponentFixture<SeconedNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeconedNavComponent]
    });
    fixture = TestBed.createComponent(SeconedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
