
module.exports = async function () {
  console.log('enter dapp init')

  app.registerContract(1000, 'certificate.issue_certificate')
  app.registerContract(1001, 'certificate.sign')
  // app.registerContract(1002, 'certificate.balanceOf')
  // app.registerContract(1003, 'certificate.transferFrom')
  // app.registerContract(1004, 'certificate.mint')
  app.registerContract(1005, 'payments.pay')


  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}

//  app.registerContract(1001, 'domain.set_ip')