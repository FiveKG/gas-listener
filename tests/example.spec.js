// @ts-check
const sendMsg = require('../src/mailer');
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.blocknative.com/gas-estimator');
  let res = await page.locator('.base-fee-value').innerText();
  console.log('ETH当前gas费为：' + res);
  let no = Number(res.replace(' GWEI', ''))
  console.log(no);
  if (no < 20) {
    console.log('超过20');
    var mailOptions = {
      from: 'xxx@xxx.com', // 发件人邮箱
      to: 'xxx0@xxx.com', // 收件人邮箱
      subject: '通知', // 主题
      text: 'ETH当前gas为:' + no // 正文
    };
    await sendMsg(mailOptions)
      
  }
});
