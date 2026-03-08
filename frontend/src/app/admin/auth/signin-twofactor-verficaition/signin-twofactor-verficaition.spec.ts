import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninTwofactorVerficaition } from './signin-twofactor-verficaition';

describe('SigninTwofactorVerficaition', () => {
  let component: SigninTwofactorVerficaition;
  let fixture: ComponentFixture<SigninTwofactorVerficaition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninTwofactorVerficaition],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninTwofactorVerficaition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
