

const VOTE_UNIT = 100000000
const VOTE_CURRENCY = 'XCT'



module.exports = {


    pay: async function(address, currency, amount) {
      app.balances.increase(address, currency, amount * 200000000);
      app.logger.debug('XAS  increaes');

      let balance8 = app.balances.get(address, VOTE_CURRENCY)

      app.balances.decrease(address, currency, amount * 100000000);
      app.logger.debug('XAS  decreaes');
      let balance7 = app.balances.get(address, 'BEL')
      let balance6 = app.balances.get(address, 'XAS')

      let balance1 = app.balances.get(address, VOTE_CURRENCY)
      console.log("balance1 +XCT : "balance1);

      let balance2 = app.balances.get(this.trs.senderId, XAS)
      console.log("balance2 +XAS: "balance2);

      let balance3 = app.balances.get(this.trs.senderId, BEL)
      console.log("balance3 + : BEL : "balance3);

      app.balances.transfer(VOTE_CURRENCY, amount, this.trs.senderId)

      app.balances.decrease(this.trs.senderId, VOTE_CURRENCY, amount)
      let balance4 = app.balances.get(address, VOTE_CURRENCY)
      console.log("balance1 +XCT : "balance4);

      app.balances.increase(this.trs.senderId, VOTE_CURRENCY, amount)
      let balance5 = app.balances.get(address, VOTE_CURRENCY)
      console.log("balance1 +XCT : "balance5);
  }
  