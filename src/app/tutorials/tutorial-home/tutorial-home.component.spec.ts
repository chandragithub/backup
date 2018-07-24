import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialHomeComponent } from './tutorial-home.component';

describe('TutorialHomeComponent', () => {
  let component: TutorialHomeComponent;
  let fixture: ComponentFixture<TutorialHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
