import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSeComponent } from './registro-se.component';

describe('RegistroSeComponent', () => {
  let component: RegistroSeComponent;
  let fixture: ComponentFixture<RegistroSeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroSeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
