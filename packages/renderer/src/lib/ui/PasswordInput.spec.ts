/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

/* eslint-disable @typescript-eslint/no-explicit-any */

import '@testing-library/jest-dom/vitest';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import PasswordInput from './PasswordInput.svelte';

function renderInput(password: string, readonly: boolean, onClick?: any): void {
  render(PasswordInput, { password: password, readonly: readonly, onClick: onClick });
}

test('Expect basic styling', async () => {
  const value = 'test';
  renderInput(value, false);

  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('aria-label', 'show/hide');
  expect(element).toHaveClass('cursor-pointer');
});