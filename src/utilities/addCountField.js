const addCountField = (arr) => {
  return arr.map(item => {
    if (item.count === undefined) {
      item.count = 0
    }
    return item;
  })
}

export default addCountField;
