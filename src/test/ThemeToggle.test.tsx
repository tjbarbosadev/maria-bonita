import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { AppProviders } from '@/components/layout/AppProviders';
import { ThemeToggle } from '@/components/layout/Header';

describe('ThemeToggle', () => {
  it('toggles dark class on html element', async () => {
    const user = userEvent.setup();
    render(
      <AppProviders>
        <ThemeToggle />
      </AppProviders>,
    );

    const button = screen.getByRole('button', { name: /tema/i });
    await user.click(button);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
