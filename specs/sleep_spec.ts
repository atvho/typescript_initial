import { expect } from 'chai'
import { browser, $, Key } from 'protractor'

// describe('Tests suite', function() {
//     it('find iframe text', async function() {
//         await browser.get('/iframe')
//         let iframe = $('#mce_0_ifr')
//         await browser.switchTo().frame(iframe.getWebElement())
//         console.log(await $('#tinymce').getText())
//     })
// })

describe('Tests suite', function() {
    it('sendKeys test', async function() {
       await browser.get('/login')
       let loginField = await $('#username')
       await loginField.sendKeys('Blabla' + Key.TAB)
       browser.sleep(2000)
       expect(await browser.getTitle()).to.equal('The Internet')
    })
})