import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Boilerplate/)
})

test('has header', async ({ page }) => {
  await page.goto('/')

  const header = page.locator('header[role="banner"]')
  await expect(header).toHaveText('Boilerplate')
})

test('must interact with the CounterButton', async ({ page }) => {
  await page.goto('/')

  await page.click('button[aria-label="COUNT: 0"]')

  const buttonText = await page.innerText('button[aria-label="COUNT: 1"]')
  expect(buttonText).toBe('COUNT: 1')

  const buttonCount = page.getByRole('button', { name: 'COUNT: 1' })
  await buttonCount.click()

  const buttonText2 = page.getByRole('button', { name: 'COUNT: 2' })
  expect(buttonText2).toBeDefined()
})
