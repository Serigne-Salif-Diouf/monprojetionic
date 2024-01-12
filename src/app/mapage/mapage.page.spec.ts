import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapagePage } from './mapage.page';

describe('MapagePage', () => {
  let component: MapagePage;
  let fixture: ComponentFixture<MapagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
