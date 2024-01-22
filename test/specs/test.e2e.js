const { $, expect, browser } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');

describe('My Todo Application', () => {
    it('TC01 - should input and expect todos', async () => {
        await LoginPage.open();

        // Input text into the todo input field
        const todo1 = $('[data-testid="text-input"]');
        await todo1.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Input text into the todo input field
        const todo2 = $('[data-testid="text-input"]');
        await todo2.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Expectation 
        const title = await $('//h1[text()="todos"]');
        await expect(title).toExist()
        const todo_count = await $('// *[@class="todo-count"]');
        await expect(todo_count).toBePresent()
    });

    it('TC02 - should be able to click toggle all checklist', async () => {
        // Toggle All
        const toggle_all = $('// *[@data-testid="toggle-all"]');
        await toggle_all.click()

        // Expectation 
        const title = await $('// *[@class="completed"]');
        await expect(title).toBeExisting()

        const tab_completed = $('// *[text()="Completed"]');
        await expect(tab_completed).toBeClickable()
    });

    it('TC03 - should be able to click toggle checklist', async () => {
        // Expectation 
        const title = await $('// *[@data-testid="todo-item-toggle"]');
        await expect(title).toBeExisting()

        const tab_completed = $('// *[text()="Completed"]');
        await expect(tab_completed).toBeClickable()
    });

    it('TC04 - should be able to click toggle all and clear completed', async () => {
        // Toggle All
        const toggle_all = $('// *[@data-testid="toggle-all"]');
        await toggle_all.doubleClick()
        
        const clear_completed = $('// *[@class="clear-completed"]');
        await clear_completed.click()

        // Expectation 
        const title = await $('//h1[text()="todos"]');
        await expect(title).toExist()
    });
    
    it('TC05 - should be able to click toggle and clear completed', async () => {
        // Input text into the todo input field
        const todo1 = $('[data-testid="text-input"]');
        await todo1.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Input text into the todo input field
        const todo2 = $('[data-testid="text-input"]');
        await todo2.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');
        
        // Toggle 
        const toggle_all = $('// *[@data-testid="todo-item-toggle"]');
        await toggle_all.click()

        // Expectation 
        const clear_completed = $('// *[@class="clear-completed"]');
        await clear_completed.click()

        // await browser.pause(5000);
        const title = await $('//h1[text()="todos"]');
        await expect(title).toExist()
    });

    it('TC06 - should be able to click toggle sign "X" after hover', async () => {
        //  Hover
        const hover = $('// *[@data-testid="todo-item-label"]');
        await hover.moveTo();

        // Wait for the target element to be displayed (adjust timeout as needed)
        await hover.waitForDisplayed({ timeout: 5000 });
   
        const clickSignX = $('// *[@data-testid="todo-item-button"]');
        await clickSignX.click()

        // Expectation 
        const title = await $('//h1[text()="todos"]');
        await expect(title).toExist()
    });

    it('TC07 - should be able to tab active and ensure for data', async () => {
        // Input text into the todo input field
        const todo1 = $('[data-testid="text-input"]');
        await todo1.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Input text into the todo input field
        const todo2 = $('[data-testid="text-input"]');
        await todo2.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        const tab_active = $('// *[text()="Active"]');
        await tab_active.click()
        
        // Expectation 
        const tab_active_expected = await $('// *[text()="Active"]');
        await expect(tab_active_expected).toExist()
    });

    it('TC08 - should be able to tab completed and ensure for data', async () => {
        // Input text into the todo input field
        const todo1 = $('[data-testid="text-input"]');
        await todo1.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Input text into the todo input field
        const todo2 = $('[data-testid="text-input"]');
        await todo2.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Toggle All
        const toggle_all = $('// *[@data-testid="toggle-all"]');
        await toggle_all.click()

        // Tab Completed
        const tab_completed = $('// *[text()="Completed"]');
        await tab_completed.click()
        
        // Expectation 
        const tab_completed_expected = await $('// *[text()="Completed"]');
        await expect(tab_completed_expected).toExist()
        // await browser.pause(5000);
    });

    it('TC09 - should be able to tab completed, active and ensure for data', async () => {
        // Input text into the todo input field
        const todo1 = $('[data-testid="text-input"]');
        await todo1.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Input text into the todo input field
        const todo2 = $('[data-testid="text-input"]');
        await todo2.setValue('Your todo item');
        // Press Enter key to submit the todo using browser.keys()
        await browser.keys('Enter');

        // Toggle 
        const toggle_all = $('// *[@data-testid="todo-item-toggle"]');
        await toggle_all.click()

        // Tab Completed
        const tab_completed = $('// *[text()="Completed"]');
        await tab_completed.click()

        // Expectation 
        const tab_completed_expected = await $('// *[text()="Completed"]');
        await expect(tab_completed_expected).toExist()

        // Tab Completed
        const tab_actived = $('// *[text()="Active"]');
        await tab_actived.click()
        
        // Expectation 
        const tab_activated_expected = await $('// *[text()="Active"]');
        await expect(tab_activated_expected).toExist()

        // Tab All
        const tab_all = $('// *[text()="All"]');
        await tab_all.click()
        
        // Expectation 
        const tab_all_expected = await $('// *[text()="All"]');
        await expect(tab_all_expected).toExist()
        await browser.pause(5000);
    });
});
