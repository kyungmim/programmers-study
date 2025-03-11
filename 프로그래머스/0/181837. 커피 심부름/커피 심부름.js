function solution(order) {
    const menuPrices = {
    "americano": 4500,
    "cafelatte": 5000,
    "iceamericano": 4500,
    "americanoice": 4500,
    "hotamericano": 4500,
    "americanohot": 4500,
    "icecafelatte": 5000,
    "cafelatteice": 5000,
    "hotcafelatte": 5000,
    "cafelattehot": 5000,
    "anything": 4500, 
  };

  return order.reduce((total, item) => total + (menuPrices[item] || 0), 0);
}