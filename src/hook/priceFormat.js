function priceFormat(n) {
  //Hàm định dạng giá tiền
  n = n * 1;
  return n.toLocaleString("it-IT", { style: "currency", currency: `VND` });
}

export default priceFormat;
