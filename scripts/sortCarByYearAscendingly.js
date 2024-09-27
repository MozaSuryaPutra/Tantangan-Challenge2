function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  //Pake Bubble Sort
  for (let i = 1; i < result.length; i++) {
    for (let j = result.length - 1; j >= i; j--) {
      if (result[j].year < result[j - 1].year) {
        let temp = result[j - 1];
        result[j - 1] = result[j];
        result[j] = temp;
      }
    }
  }
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
