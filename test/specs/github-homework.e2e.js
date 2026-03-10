describe('GitHub Homework Tests', () => {

    it('Test 1 - Sign up process', async () => {

        await browser.url('https://github.com')
        await browser.pause(3000)

        const signUp = await $('=Sign up')
        await signUp.waitForClickable({ timeout: 15000 })
        await signUp.click()

        const email = await $('input[type="email"]')
        await email.waitForDisplayed({ timeout: 15000 })
        await email.setValue('test123@gmail.com')

    })


    it('Test 2 - Scroll and Start free', async () => {

        await browser.url('https://github.com')
        await browser.pause(3000)

        const startFree = await $('=Start free')
        await startFree.scrollIntoView()
        await startFree.waitForDisplayed()
        await startFree.click()

    })


    it('Test 3 - Subscribe form', async () => {

        await browser.url('https://github.com')
        await browser.pause(3000)

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight)
        })

        const email = await $('input[type="email"]')

        if (await email.isExisting()) {
            await email.setValue('test@gmail.com')
        }

    })


    it('Test 4 - Search repository', async () => {

        await browser.url('https://github.com')
        await browser.pause(3000)

        const search = await $('input[placeholder="Search or jump to..."]')
        await search.waitForDisplayed({ timeout: 15000 })

        await search.setValue('act')
        await browser.keys('Enter')

        await browser.pause(3000)

    })


    it('Test 5 - Pricing page', async () => {

        await browser.url('https://github.com/pricing')
        await browser.pause(3000)

        const heading = await $('h1')
        await heading.waitForDisplayed({ timeout: 15000 })

        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight)
        })

    })

})