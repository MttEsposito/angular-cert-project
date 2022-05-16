import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderModule } from 'ngx-order-pipe';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[OrderModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 sections', () => {
    const html: HTMLElement = fixture.nativeElement;
    const sections = html.querySelectorAll("section");
    expect(sections.length).toBe(2);
  });

  it('should have a variable Observable', () => {
    const variable = component.stocks$;
    expect(variable).toBeDefined()
  });
});
