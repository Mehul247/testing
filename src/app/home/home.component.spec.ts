import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

/** add prefix 'f' to describe method to skip single spec file */
/** fdescribe('HomeComponent', () => { */

/** add prefix 'x' to describe method to skip single spec file */
/** xdescribe('HomeComponent', () => { */

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Variable stateValue should be state value', () => {
    expect(component.stateValue).toBe('state value');
  });

  it('statevalue should not have any other value', () => {
    expect(component.stateValue).not.toBe("Not Value")
  });

  it('Variabe should start with state', () => {
    const mokeState = 'state';
    expect(component.stateValue).toMatch(mokeState);
  });

  it('name method should return as per parameter passed', () => {
    const name = component.name('Mehul');
    expect(name).toBe('Welcome Mehul!');
  });

  it('arrayList should contain first name', () => {
    const arrayList = component.ArrayList();
    expect(arrayList).toContain('first name');
  });

  it('Value of welcome varible is changed when ngOnInit called', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(component.isLoggedIn);
  });

  it('ArrayList Should have only one value and that is a', () => {
    const arrayList = component.isLoggedInArrary;
    expect(arrayList).toEqual(['a']);
  });

  it('object1 and object2 should have same value', () => {
    expect(component.Object1).toEqual(component.Object2);
  });

  it('Value should be null initially', () => {
    expect(component.stateValueNull).toBeNull();
  });

  it('variable should undefined', () => {
    expect(component.stateValueUndefine).toBeUndefined();
  });

  it('Should not be number', () => {
    expect(component.toBeNaN).toBeNaN();
  });

  it('ArrayList should be same as mockarray', () => {
    const mockArray = ['first name', 'last name', 'middle name'];
    expect(component.ArrayList()).toEqual(mockArray);
  });

  it('Value should be less than 10', () => {
    expect(component.toBeLessThanValu).toBeLessThan(10);
  });

  /** add prefix 'x' to skip test case */

  // xit('Value should be less than 10', () => {
  //   expect(component.toBeLessThanValu).toBeLessThan(10);
  // });

  it('Should emit the value once emitToParent method calling.', () => {
    spyOn(component.data, 'emit');
    component.emitToParent();
    expect(component.data.emit).toHaveBeenCalledWith('true');
  });

  /** To Run single test case add 'f' prefix */

  // fit('Should emit the value once emitToParent method calling.', () => {
  //   spyOn(component.data, 'emit');
  //   component.emitToParent();
  //   expect(component.data.emit).toHaveBeenCalledWith('true');
  // });


});
