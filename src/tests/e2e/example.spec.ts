import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Playwright/)
})

test('get started link', async ({ page }) => {
  await page.goto('/')

  const header = page.locator('header[role="banner"]')
  await expect(header).toHaveText('Boilerplate')
})
