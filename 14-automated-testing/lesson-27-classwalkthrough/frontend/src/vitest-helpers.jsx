import { ThemeContext } from './context/ThemeContext';
import { render } from '@testing-library/react';

// mock theme context value
const mockThemeContextValue = {
  theme: 'light',
  toggleTheme: () => { },
};

export function renderWithProviders(ui, options) {
  return render(
    <ThemeContext.Provider value={mockThemeContextValue}>
      {ui}
    </ThemeContext.Provider>, { ...options }
  );
}
