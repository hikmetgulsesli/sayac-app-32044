import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '@/hooks/useCounter';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useCounter', () => {
  beforeEach(() => {
    localStorageMock.clear();
    window.app = {} as any;
  });

  it('starts with count 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('starts with empty history', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.history).toEqual([]);
  });

  it('increments count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it('decrements count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });

  it('resets count to 0', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    act(() => result.current.increment());
    act(() => result.current.reset());
    expect(result.current.count).toBe(0);
  });

  it('adds history entry on increment', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.history).toHaveLength(1);
    expect(result.current.history[0].type).toBe('increment');
  });

  it('keeps max 10 history entries', () => {
    const { result } = renderHook(() => useCounter());
    for (let i = 0; i < 15; i++) {
      act(() => result.current.increment());
    }
    expect(result.current.history.length).toBe(10);
  });

  it('loads history from localStorage', () => {
    const storedHistory = [
      { id: 'abc', type: 'increment' as const, previousValue: 0, newValue: 1, timestamp: Date.now() },
    ];
    localStorageMock.setItem('sayac-app-32044-counter', JSON.stringify({ count: 1, history: storedHistory }));
    const { result } = renderHook(() => useCounter());
    expect(result.current.history).toHaveLength(1);
  });
});