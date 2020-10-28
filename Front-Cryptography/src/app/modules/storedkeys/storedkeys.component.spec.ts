import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredkeysComponent } from './storedkeys.component';

describe('StoredkeysComponent', () => {
  let component: StoredkeysComponent;
  let fixture: ComponentFixture<StoredkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
