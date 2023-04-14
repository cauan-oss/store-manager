const saleEntry = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const returnSale = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
}

const OneSale = [
  {
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
  {
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }

]
const allSales = [
  {
    "saleId": 1,
    "date": "2023-03-27T21:04:56.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-03-27T21:04:56.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-03-27T21:04:56.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const SaleByIdOnly = [
  {
    "id": 1,
    "date": "2021-09-09T04:54:29.000Z",
  }
]

returnSaleUpdated = {
  "saleId": 1,
  "itemsUpdated":
    [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
}


module.exports = {
  saleEntry,
  returnSale,
  OneSale,
  allSales, 
  SaleByIdOnly,
  returnSale,
}