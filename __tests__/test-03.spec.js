import { a, b, c } from '../solutions/app3';

describe('1. Feladat', () => {
    test('kell egy a változó Jane értékkel', () => {
        expect(a).toEqual('Jane');
    });
    
    test('kell egy b változó Doe Jennefer', () => {
        expect(b).toEqual('Jennefer');
    });
    
    test('kell egy c változó Johnny értékkel', () => {
        expect(c).toEqual('Johnny');
    });
});
