import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadLisstComponent } from './unread-lisst.component';

describe('UnreadLisstComponent', () => {
  let component: UnreadLisstComponent;
  let fixture: ComponentFixture<UnreadLisstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadLisstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadLisstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
