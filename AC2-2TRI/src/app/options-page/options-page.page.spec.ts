import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptionsPagePage } from './options-page.page';

describe('OptionsPagePage', () => {
  let component: OptionsPagePage;
  let fixture: ComponentFixture<OptionsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
