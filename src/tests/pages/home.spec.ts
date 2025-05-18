import { expect, test } from '@playwright/test'

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => await page.goto('/'))

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Boilerplate/)
  })

  test('has header', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toHaveText('Boilerplate')
  })
})
