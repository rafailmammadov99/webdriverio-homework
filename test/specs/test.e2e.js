describe("Webdriverio main page", () => {
    xit("should have correct title", async () => {
      await browser.url('https://webdriver.io/');
      const title = await browser.getTitle()
      console.log(title);
    await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit("should show addValue command", async ()  => {
      await browser.url('https://the-internet.herokuapp.com/login');

      let input = await $("#username")
      await input.addValue("hello")
      await browser.pause(2000)

      await input.addValue(123)
      await browser.pause(2000)

      await expect (input).toHaveValue("hello123")
    });

    xit("should show setValue command", async ()  => {
      await browser.url('https://the-internet.herokuapp.com/login');

      let input = await $("#username")
      await input.setValue("world")
      await input.setValue("hello")
      await browser.pause(2000)


      console.log(await input.getValue())
      await expect(input).toHaveValue("hello")
    });

    xit("should show click command", async ()  => {
      await browser.url('https://the-internet.herokuapp.com/login');

      let loginButton = await $('.radius')
      await browser.pause(2000)
      await loginButton.click()
      await browser.pause(4000)

      let inputUsername = await $("#username")
      await inputUsername.addValue("tomsmith")
      await browser.pause(2000)
      
      let inputPassword = await $("#password")
      await inputPassword.addValue("SuperSecretPassword!")
      await browser.pause(2000)

      await loginButton.click()
      await browser.pause(4000)

    });

    xit("should show getAttribute command", async ()  => {
      await browser.url('https://dou.ua/search');

      let inputSearch = await $('#gsc-i-id1')
      let attr = await inputSearch.getAttribute("aria-label")
      console.log("Placeholder attribute is: " + attr)  // outputs: шукати
      
      await inputSearch.setValue("Cat")
      attr = await inputSearch.getValue()
      await browser.pause(2000)
      console.log("Value attribute is: " + attr) // outputs: Cat
    });


    xit("should show getLocation command", async ()  => {
      await browser.url('https://dou.ua');

      let inputSearch = await $('#txtGlobalSearch')
      let location = await inputSearch.getLocation()
      console.log("Location is: " + location)  // outputs: x, y
      
      let xLocation = await inputSearch.getLocation("x")
      console.log("Location by x  is: " + xLocation) // outputs: x

    });

    xit("should show getText command", async ()  => {
      await browser.url('https://webdriver.io');

      let subtitle = await $('.hero__subtitle')
      console.log("Subtitle text is: " + await subtitle.getText()) // outputs: Next-gen browser...
    });

    describe("WebdriverIO API test", () => {
    xit("should check API page and search", async () => {
        // open website
        await browser.url('https://webdriver.io')

        // click API link
        const apiLink = await $('=API')
        await apiLink.waitForClickable({ timeout: 5000 })
        await apiLink.click()

        // wait for URL to confirm navigation to API page
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/docs/api'),
            { timeout: 10000, timeoutMsg: 'API page URL not reached after 10s' }
        )

        // check Introduction heading
        const introHeading = await $('.markdown h1, article h1, h1.title')
        await introHeading.waitForDisplayed({ timeout: 10000 })
        await expect(introHeading).toHaveText('Introduction')

        // check breadcrumbs
        const breadcrumbs = await $('.breadcrumbs')
        await breadcrumbs.waitForDisplayed({ timeout: 5000 })
        console.log("Breadcrumbs text: " + await breadcrumbs.getText())

        // check WebDriver link and href attribute
        const webdriverLink = await $('=WebDriver')
        await webdriverLink.waitForDisplayed({ timeout: 5000 })
        const hrefValue = await webdriverLink.getAttribute("href")
        console.log("WebDriver link: " + hrefValue)

        // open search
        const searchButton = await $('.DocSearch-Button')
        await searchButton.waitForClickable({ timeout: 5000 })
        await searchButton.click()

        // input text in search
        const searchInput = await $('#docsearch-input')
        await searchInput.waitForDisplayed({ timeout: 5000 })
        await searchInput.setValue("All is done")

        // ✅ FIX: Clear using keyboard instead of the Shadow DOM clear button
        await browser.keys(['Control', 'a'])
        await browser.keys('Delete')

        // verify the input is now empty
        await expect(searchInput).toHaveValue('')
    })
    describe('WebdriverIO Homework Task', () => {

    it('should practice webdriver methods', async () => {

        // Open WebdriverIO website
        await browser.url('https://webdriver.io/');

        // Find Docs API link
        const docsApiLink = await $('nav a[href="/docs/api"]');

        // Check if displayed
        console.log('Docs API displayed:', await docsApiLink.isDisplayed());

        // Click Docs API
        await docsApiLink.click();

        // Wait for page to load
        await browser.pause(2000);

        // Scroll to Blog link
        const blogLink = await $('a[href="/blog"]');
        await blogLink.scrollIntoView();

        // Check Blog visibility
        console.log('Blog displayed:', await blogLink.isDisplayed());

        // Check if clickable
        console.log('Blog clickable:', await blogLink.isClickable());

        // Get HTML of element
        const html = await blogLink.getHTML();
        console.log('HTML:', html);

        // Click Blog
        await blogLink.click();

        // Wait until heading appears
        const heading = await $('h1');

        await browser.waitUntil(
            async () => await heading.isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Heading did not appear'
            }
        );

        console.log('Heading displayed:', await heading.isDisplayed());

        // Take screenshot
        await browser.saveScreenshot('./blogPage.png');

    });

});
})

});

