const allProducts = [
  [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' },
  ],
];

const onlyOneProduct = [
  [
    { id: 2, name: 'Traje de encolhimento' },
  ],
];

const allSalesMock = [
  {
    "saleId": 1,
    "date": "2022-10-19T18:14:51.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-10-19T18:14:51.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-10-19T18:14:51.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const byIdMock = [
  {
    "date": "2022-10-19T18:14:51.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-10-19T18:14:51.000Z",
    "productId": 2,
    "quantity": 10
  }
]

module.exports = {
  allProducts,
  onlyOneProduct,
  allSalesMock,
  byIdMock,
};
