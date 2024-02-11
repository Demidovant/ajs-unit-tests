import { healthIndicator } from '../app';

test('healthy test', () => {
    const value = {
        name: 'Маг', 
        health: 90
    }
    
    const result = healthIndicator(value);
    expect(result).toBe('healthy')
})

test('wounded test', () => {
    const value = {
        name: 'Маг', 
        health: 40
    }
    
    const result = healthIndicator(value);
    expect(result).toBe('wounded')
})

test('critical test', () => {
    const value = {
        name: 'Маг', 
        health: 10
    }
    
    const result = healthIndicator(value);
    expect(result).toBe('critical')
})