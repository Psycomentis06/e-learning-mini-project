import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonChapterComponent } from './lesson-chapter.component';

describe('LessonChapterComponent', () => {
  let component: LessonChapterComponent;
  let fixture: ComponentFixture<LessonChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
