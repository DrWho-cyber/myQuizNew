import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPgComponent } from './quiz-pg.component';

describe('QuizPgComponent', () => {
  let component: QuizPgComponent;
  let fixture: ComponentFixture<QuizPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
