var adfly_url = ['http://keistaru.com/1JZc', 'http://keistaru.com/2QPU', 'http://keistaru.com/2QQZ', 'http://keistaru.com/2QRM', 'http://keistaru.com/2QS1'];

module.exports = {
  'click skyp ads': function (browser) {

      browser
        .url(adfly_url[Math.floor(Math.random() * adfly_url.length)])
        .pause(10*1000)
        .element('css selector','.recaptcha-checkbox-checkmark',function(res){
            if(res.value && res.value.ELEMENT){
              console.log('FOUND CAPTCHA BUTTON');
              browser.end();
            } else {
              browser
                .waitForElementVisible('.mwButton',10*1000)
                .click('.mwButton')
                .pause(5*1000)
                .end();
            }
        });
  }
};
