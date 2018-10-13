module.exports = {
    name: 'balances',
    fields: [
      {
        name: 'balance',
        type: 'String',
        not_null: true,
        length: 35
      },
      {
        name: 'address',
        type: 'String',
        length: 30,
        not_null: true
      },
      {
        name: 'totalSupply',
        type: 'String',
        length: 30,
        not_null: true
      }]
    }
