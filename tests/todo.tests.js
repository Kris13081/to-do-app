//Verify if a user can add a task
const { test, expect } = require('@playwright/test');

test('user can add a task', async ({ page }) => {
    
    await page.goto('http://localhost:5000/');
    await page.fill('#task-input', 'Test Task');
    await page.click('#add-task');
    const taskText = await page.textContent('.task');
    expect(taskText).toContain('Test Task')
});