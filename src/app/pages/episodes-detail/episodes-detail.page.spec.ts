import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodesDetailPage } from './episodes-detail.page';

describe('EpisodesDetailPage', () => {
  let component: EpisodesDetailPage;
  let fixture: ComponentFixture<EpisodesDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EpisodesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


