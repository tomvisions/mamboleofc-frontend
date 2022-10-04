import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFlamingoComponent } from './the-flamingo.component';

describe('TheFlamingoComponent', () => {
  let component: TheFlamingoComponent;
  let fixture: ComponentFixture<TheFlamingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheFlamingoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheFlamingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
