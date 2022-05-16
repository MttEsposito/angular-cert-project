import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FormStockInputComponent } from './form-stock-input.component';

describe('FormStockInputComponent', () => {
  let component: FormStockInputComponent;
  let fixture: ComponentFixture<FormStockInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStockInputComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStockInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a variable maxlength equal to 5', () => {
    const maxLength = component.maxLength;
    expect(maxLength).toEqual(5);
  });

  it('should have a form', () => {
    const html: HTMLElement = fixture.nativeElement;
    const formElement = html.querySelector("form");
    expect(formElement).toBeTruthy();
  });

  it('the form should have a input text and required', () => {
    const html: HTMLElement = fixture.nativeElement;
    const input = html.querySelector("input");
    const type = input?.type;
    const required = input?.required;
    expect(input).toBeTruthy();
    expect(type).toBe("text");
    expect(required).toBeTruthy();
  });
});
