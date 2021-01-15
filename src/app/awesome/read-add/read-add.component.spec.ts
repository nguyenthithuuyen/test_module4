import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAddComponent } from './read-add.component';

describe('ReadAddComponent', () => {
  let component: ReadAddComponent;
  let fixture: ComponentFixture<ReadAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
