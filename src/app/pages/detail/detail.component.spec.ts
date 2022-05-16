import { AppRoutesModule } from '@ACPRoutes/routes.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutesModule],
      declarations: [DetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a section', () => {
    const html: HTMLElement = fixture.nativeElement;
    const section = html.querySelector("section");
    expect(section).toBeTruthy();
  });

  it('should have a button go back', () => {
    const html: HTMLElement = fixture.nativeElement;
    const btn = html.querySelector("#gobackbtn");
    const text = btn?.textContent?.trim();
    expect(text).toContain("Back to lists of stocks");
  });
});
