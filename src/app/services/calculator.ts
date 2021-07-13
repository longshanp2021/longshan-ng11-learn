export function add(n1: number, n2: number) {
    return n1 + n2;
}

export class Calculator {
    public lastResult: number;
    
    public add(n1: number, n2: number) {
        this.lastResult = n1 + n2;
        return this.lastResult;
    }
}