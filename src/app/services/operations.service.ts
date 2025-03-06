import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  public number = signal(0);
  readonly result = computed(()=>this.calculateSeries(this.number()))
  constructor() {
    console.log(this.number())
  }

  // Obtiene el enésimo número primo
  private getPrime(n: number): number {
    let count = 0;
    let num = 1;
    while (count < n) {
      num++;
      if (this.isPrime(num)) {
        count++;
      }
    }
    return num;
  }

  // Verifica si un número es primo
  private isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Calcula el número triangular
  private getTriangular(n: number): number {
    return (n * (n + 1)) / 2;
  }

  // Calcula el número Fibonacci
  private getFibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  // Calcula la serie matemática
  calculateSeries(n: number): number {
    console.log(n)
    const prime = this.getPrime(n);
    const triangular = this.getTriangular(n - 1);
    const fibonacci = this.getFibonacci(n + 2);
  console.log((4 * prime - triangular) / fibonacci)
    return (4 * prime - triangular) / fibonacci;
    
  }


}

