import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('sample1', () => {

  beforeEach(() => {
    vi.clearAllMocks(); // ✅ instead of jest.clearAllMocks()
  });

  it('dummy test', () => {
    expect(1 + 1).toBe(2);
  });

});