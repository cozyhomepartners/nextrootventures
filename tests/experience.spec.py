"""Career date regression checks against the running website.

Run with: python3 tests/experience.spec.py
"""
import asyncio
from playwright.async_api import async_playwright


async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1800})
        await page.goto("http://localhost:8080", wait_until="networkidle")
        nace = page.locator("#experience h3").filter(has_text="Nace AI")
        role = nace.locator("../..")
        assert await role.get_by_text("Vice President of Sales", exact=True).count() == 1
        assert await role.get_by_text("Nov 2026 – Present", exact=True).count() == 1
        assert await page.locator("#experience").get_by_text("Advisor to CEO", exact=True).count() == 0
        await browser.close()


asyncio.run(main())