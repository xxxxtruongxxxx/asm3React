const deleteItemInArrByIdValue = (arr, idValue) => {
  //Hàm này dùng tạo mảng mới loại bỏ phần tử có giá trị ID truyền vào (hàm mới = hàm cũ - 1 phần tử có giá trị ID muốn loại bỏ)
  const newArr = arr.filter((item) => item.id !== idValue);
  return newArr;
};

export default deleteItemInArrByIdValue;
