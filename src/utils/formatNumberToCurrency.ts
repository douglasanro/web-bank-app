const formatNumberToCurrency = (value: number) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

export default formatNumberToCurrency;
