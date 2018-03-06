import { gateway } from '@moltin/sdk';

const Moltin = gateway({
  client_id: process.env.MOLTIN_ID,
  client_secret: process.env.MOLTIN_SECRET
});

const guestNum = 0;

const moltinController = {
  authenticate: (req, res, next) => {
    Moltin.Authenticate()
      .then((resp) => {
        console.log('Moltin autenticated ', resp);
        next();
      }).catch((err) => {
        console.error('Moltin error ', err);
      })
  },
  getAllProduct: (req, res) => {
    Moltin.Products.All()
      .then((prods) => {
        res.status(200).json(prods);
      }).catch((err) => {
        res.status(500).json(err);
      });
  },
  getProduct: (req, res) => {
    const { pid } = req.params;

    Moltin.Products.Get(pid)
      .then((prod) => {
        res.status(200).json(prod);
      }).catch((err) => {
        res.status(500).json(err);
      });
  },
  getCart: (req, res) => {
    Moltin.Cart('testCart').Items()
      .then((cart) => {
        res.status(200).json(cart);
      }).catch((err) => {
        res.status(500).json(err);
      });
  },
  addToCart: (req, res) => {
    const { pid } = req.body;

    Moltin.Cart('testCart').AddProduct(pid, 1)
      .then((item) => {
        res.status(200).json(item);
      }).catch((err) => {
        res.status(500).json(err);
      });
  }
};

export default moltinController;
