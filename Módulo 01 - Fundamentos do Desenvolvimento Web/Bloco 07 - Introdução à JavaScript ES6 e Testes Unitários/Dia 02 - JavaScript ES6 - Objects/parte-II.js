const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (p) => {
  console.log(`Olá ${p.order.delivery.deliveryPerson}, entrega para: ${p.name}, Telefone: ${p.phoneNumber}, R. ${p.address.street}, N°: ${p.address.number}, AP: ${p.address.apartment}`);

}

customerInfo(order);

const orderModifier = (p) => {
  p.order.delivery.deliveryPerson = 'Luiz Silva';
  p.payment.total = 50;
  console.log(`Olá ${p.order.delivery.deliveryPerson}, o total do seu pedido de ${(Object.keys(p.order.pizza)).join(', ')} e ${p.order.drinks.coke.type} é de R$${(p.payment.total).toFixed(2)}`)
}

orderModifier(order);