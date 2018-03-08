import { gateway } from '@moltin/sdk';
import axios from 'axios';

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
    Moltin.Products.With('main_image').All()
      .then((prods) => {
        res.status(200).json(prods);
      }).catch((err) => {
        res.status(500).json(err);
      });
  },
  getProduct: (req, res) => {
    const { pid } = req.params;

    Moltin.Products.With('main_image').Get(pid)
      .then((prod) => {
        res.status(200).json(prod);
      }).catch((err) => {
        res.status(500).json(err);
      });
  },
  addStock: (req, res) => {
    const { amount } = req.body;
    const { pid } = req.params;

    Moltin.Authenticate()
      .then((resp) => {
        console.log('Moltin autenticated ', resp);
        axios({
          method: 'POST',
          url: `https://api.moltin.com/v2/inventories/${pid}/transactions`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resp.access_token}`,
          },
          data: {
            type: 'stock-transaction',
            action: 'increment',
            quantity: 100,
          },
        }).then((stock) => {
          console.log(stock, '<<<<<<<<<<')
          res.status(200).send();
        }).catch((err) => {
          console.error(err);
          res.status(500).send();
        });
      }).catch((err) => {
        console.error(err);
        res.status(500).send();
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
