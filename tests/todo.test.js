//Verify if a user can add a task
const { test, expect } = require('@playwright/test');

test('user can add a task', async ({ page }) => {
    
    await page.goto('http://localhost:5500/');
    await page.fill('#task-input', 'Test Task');
    await page.click('#add-task');
    const taskText = await page.textContent('.task');
    expect(taskText).toContain('Test Task')
});

test('user can delete a task', async ({ page }) => {
    //Add task
    await page.goto('http://localhost:5500/');
    await page.fill('#task-input', 'Test Task');
    await page.click('#add-task');
    //Delete task
    await page.click('.task .delete-task');
    const tasks = await page.$$eval('.task',
    tasks => tasks.map(task => task.textContent));
    expect(tasks).not.toContain('Test Task');
});