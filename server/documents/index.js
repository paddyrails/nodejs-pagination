module.exports = ({name, receiptId, price1, price2}) => {
    const today = new Date();
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
    <table>
    <tr>
        <td>Date:</td>
        <td>${today.getDate()}</td>
    </tr>
    <tr>
      <td>Customer name:</td>
      <td>${name}</td>
    </tr>
      <tr>
          <td>Receipt ID:</td>
          <td>${receiptId}</td>
      </tr>
      <tr>
          <td>Price 1:</td>
          <td>${price1}</td>
      </tr>
      <tr>
          <td>Price 2:</td>
          <td>${price2}</td>
      </tr>
      <tr colspan=2>          
          <td>Total Price : ${parseInt(price2) + parseInt(price1)}</td>
      </tr>
</table>
    </body>
    </html>
    `
}