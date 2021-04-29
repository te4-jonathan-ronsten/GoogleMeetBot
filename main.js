const express = require('express', 4.17, 1);
const app = express();
const port = 3030;
app.get('/', async (req, res) => {
	await bot();
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})
const puppeteer = require('puppeteer');

const dotenv = require('dotenv');
dotenv.config();

async function bot() {
	const browser = await puppeteer.launch({
		headless: false,
		// slowMo: 100,
		devtools: false,
	});
	const page = await browser.newPage();
	browser
		.defaultBrowserContext()
		.overridePermissions('https://meet.google.com/lookup/fq5grgt3ml', [
			'microphone',
			'camera',
		])
	await page.setDefaultTimeout(100000);
	// await page.setDefaultNavigationTimeout(20000)
	await page.goto(
		'https://accounts.google.com/login/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin'
	);
	await page.type('.whsOnd', process.env.MAIL);
	await page.click('#identifierNext');
	await page.waitForNavigation();
	await page.type('#username', process.env.USERNAME);
	await page.type('#password', process.env.PASSWORD);
	await page.click('.form__button ');
	await page.waitForNavigation();
	await page.waitFor(5000);
	await page.goto('https://meet.google.com/lookup/fq5grgt3ml');
	await page.waitFor(2000);
	await page.click('.uArJ5e.UQuaGc.Y5sE8d.uyXBBb.xKiqt');
	await page.waitFor(4000);
	await page.click('.uArJ5e.UQuaGc.kCyAyd.QU4Gid.foXzLb.IeuGXd', ['click', 2]);
	await page.waitFor(2000);
	
	var texts = await page.$$eval('.ZjFb7c', elements => elements.map(item => item.textContent));
	console.log(texts);
	
	
	await browser.close();
	return texts;
}
