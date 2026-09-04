import { Page, Locator } from 'playwright';

export class RegistrationPage {
    readonly page: Page;

    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly registerButton: Locator;
    readonly errorMessages: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstNameField = page.getByTestId('new-user-first-name-field');
        this.lastNameField = page.getByTestId('new-user-last-name-field');
        this.registerButton = page.getByTestId('new-user-register-button');
        this.errorMessages = page.locator('p.gl-field-error:not(.hidden)');
    }

    async open() {
        await this.page.goto(
            'https://gitlab.com/-/trial_registrations/new?glm_source=about.gitlab.com&glm_content=default-saas-trial/'
        );
    }

    async fillFirstName(firstName: string) {
        await this.firstNameField.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    }

    async clickRegister() {
        await this.registerButton.click();
    }
}