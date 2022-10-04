import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissiosVisionsValuesComponent } from './missios-visions-values.component';

describe('MissiosVisionsValuesComponent', () => {
  let component: MissiosVisionsValuesComponent;
  let fixture: ComponentFixture<MissiosVisionsValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissiosVisionsValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissiosVisionsValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
