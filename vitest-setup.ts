import type { Component } from 'vue';
import { render as renderComponent } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

type RenderOptions = Parameters<typeof renderComponent>[1];

export * from '@testing-library/vue';

export const render = (ui: Component, options?: RenderOptions) => {
  return {
    ...renderComponent(ui, options),
    testUser: userEvent.setup(),
  };
};
