const puppeteer = require('puppeteer')
const expect = require('chai').expect
const dotenv = require('dotenv')
dotenv.config()


describe('My first puppeteer test', () => {
    it('Should launch the browser', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            // slowMo: 100,
            devtools: false
        })
        const page = await browser.newPage()
        browser.defaultBrowserContext().overridePermissions('https://meet.google.com/lookup/fq5grgt3ml', ['microphone', 'camera'])
        // await page.setDefaultTimeout(10000)
        // await page.setDefaultNavigationTimeout(20000)
        await page.goto('https://accounts.google.com/login/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        await page.type('.whsOnd', process.env.MAIL)
        await page.click('#identifierNext')
        await page.waitForNavigation()
        await page.type('#username', process.env.USERNAME)
        await page.type('#password', process.env.PASSWORD)
        await page.click('.form__button ')
        await page.waitForNavigation()
        await page.waitFor(5000)
        await page.goto('https://meet.google.com/lookup/fq5grgt3ml')
        // await page.waitForNavigation()
        await page.waitFor(2000)
        // // await page.click('.U26fgb', {clickCount: 2})
        // const text = await page.$eval('.U26fgb', element => element.textContent)
        // // console.log(text)
        await page.click('.uArJ5e.UQuaGc.Y5sE8d.uyXBBb.xKiqt')
        await page.waitFor(4000)
        await page.click('.uArJ5e.UQuaGc.kCyAyd.QU4Gid.foXzLb.IeuGXd')
        await page.waitFor(2000)
        const user = await page.waitForXPath('//*[@id="ow3"]/div[1]/div/div[7]/div[3]/div[3]/div/div[2]/div[2]/div[2]/span[1]')
        // const dennis = await page.$$eval('.YBp7jf.Sjj3qd', element => element.textContent)
        
        console.log(user)
        // console.log(dennis)
        const text = await page.$eval('.rua5Nb', element => element.textContent)
        console.log(text)
        

        // await page.waitForNavigation()
        // // await page.goto('https://meet.google.com/ams-iobd-yng?authuser=0')
        // await page.waitFor(100000)
      

        // await page.goto('http://example.com/')
        // await page.waitForXPath('//h1')
        // const title = await page.title()
        // const url = await page.url()
        // const text = await page.$eval('h1', element => element.textContent)
        // const count = await page.$$eval('p', element => element.length)

        // expect(title).to.be.a('string', 'Example Domain')
        // expect(url).to.include('example.com')
        // expect(text).to.be.a('string', 'Example Domain')
        // expect(count).to.equal(2)


        await browser.close()
    })
})