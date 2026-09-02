import { test, expect } from 'playwright/test';


const testDate = {
    firstName: 'Amal',
    lastName: 'Mzoughi',

}
const selectors = {
    firstNameField: 'new-user-first-name-field',
    lastNameField: 'new-user-last-name-field',
    registerButton: 'new-user-register-button',
    errorMessages: 'p.gl-field-error:not(.hidden)'
}
test.describe('User Registration', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://gitlab.com/-/trial_registrations/new?glm_source=about.gitlab.com&glm_content=default-saas-trial/');
    })
    test('Register with empty fields', async ({ page }) => {
        //await page.goto('https://about.gitlab.com/');
        //await page.getByRole('link', {name: 'Get free trial'}).click();
        await page.getByTestId(selectors.registerButton).click();
        //const error = page.locator('p.gl-field-error:not(.hidden)').first();
        //await expect(error).toBeVisible();
        const errors = page.locator(selectors.errorMessages);
        await expect(errors).toHaveCount(5);
        await expect(errors).toHaveText([
            'This field is required.',
            'This field is required.',
            'Please create a username with only alphanumeric characters.',
            'Please provide a valid email address.',
            'This field is required.'
        ]);
       // await page.waitForTimeout(3000);
    })
    test('Interacting with web Element on Gitlab', async ({ page }) => {
        await page.getByTestId(selectors.firstNameField).fill(testDate.firstName);
        await page.getByTestId(selectors.lastNameField).fill(testDate.lastName);
        //await page.waitForTimeout(3000);

    })


})

