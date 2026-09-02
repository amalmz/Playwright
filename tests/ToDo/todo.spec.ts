import {test, expect} from 'playwright/test';

test.describe('User Registration', () => {
test.beforeEach(async ({ page }) => {
     await page.goto('https://gitlab.com/-/trial_registrations/new?glm_source=about.gitlab.com&glm_content=default-saas-trial/');
})
test('Register with empty fields', async({page})=> {
  //await page.goto('https://about.gitlab.com/');
  //await page.getByRole('link', {name: 'Get free trial'}).click();
  await page.getByTestId('new-user-register-button').click();  
  //const error = page.locator('p.gl-field-error:not(.hidden)').first();
  //await expect(error).toBeVisible();
  const errors = page.locator('p.gl-field-error:not(.hidden)');
  await expect(errors).toHaveCount(5);  
  await expect(errors).toHaveText([
  'This field is required.',
  'This field is required.',
  'Please create a username with only alphanumeric characters.',
  'Please provide a valid email address.',
  'This field is required.'
]);
}) 
test('Interacting with web Element on Gitlab',async({page})=>{
  await page.getByTestId('new-user-first-name-field').fill('Amal');
  await page.getByTestId('new-user-last-name-field').fill('Mzoughi');

})
 

}) 

