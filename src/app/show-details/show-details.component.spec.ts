import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsComponent } from './show-details.component';

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
