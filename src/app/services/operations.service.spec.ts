import { TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Generamos pruebas unitarias
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(1)).toBeCloseTo(4);
  });

  it('operations method result 1 ', () => {
    expect(service.calculateSeries(2)).toBeCloseTo(3.6666666666666665);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(3)).toBeCloseTo(3.4);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(4)).toBeCloseTo(2.75);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(5)).toBeCloseTo(2.6153846153846154);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(6)).toBeCloseTo(1.7619047619047619);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(7)).toBeCloseTo(1.3823529411764706);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(8)).toBeCloseTo(0.8727272727272727);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(9)).toBeCloseTo(0.6292134831460674);
  });
  it('operations method result 1 ', () => {
    expect(service.calculateSeries(10)).toBeCloseTo(0.4930555555555556);
  });
});
