const pricelist = {
  apple: 25,
  orange: 30,
  banana: 15,
  papaya: 50,
};

const discounts = {
  papaya: (count, price) => (Math.floor(count / 3) * price)
};

const applyDiscount = (basket) => Object.keys(basket.reduceditems)
  .reduce((totalDiscount, item) => {
    const discountValue = discounts[item](basket.reduceditems[item], pricelist[item]);

    discountValue &&
      console.log(`\u001b[33mSAVING: ${item} * ${basket.reduceditems[item]}: ${discountValue}ct\u001b[39m`);

    return (totalDiscount + discountValue);
  }, 0);

module.exports = (shoppingList) => {
  const emptyBasket = {
    total: 0,
    reduceditems: {},
  };

  console.log(`\u001b[32mWelcome ${new Date().toLocaleDateString()}\u001b[39m`);

  const basket = shoppingList.reduce((basket, item) => {
    basket.total = basket.total + pricelist[item];
    console.log(`${item}: ${pricelist[item]}ct`);

    if (discounts[item]) {
      basket.reduceditems[item] = basket.reduceditems[item]
        ? (basket.reduceditems[item] + 1)
        : 1
    }

    return basket;
  }, emptyBasket);

  console.log(`\nTOTAL:  ${basket.total}ct`);

  const discount = applyDiscount(basket);

  discount &&
    console.log(`\u001b[33mTOTAL SAVING TODAY: ${discount}ct\u001b[39m`);

  const discountedTotal = basket.total - discount;

  console.log(`\u001b[32mTOTAL TO PAY: ${(discountedTotal)}ct\u001b[39m`);

  return discountedTotal;
}
