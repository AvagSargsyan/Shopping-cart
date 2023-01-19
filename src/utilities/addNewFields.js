// Function API:
// interface addNewFields {
//   (arr: array, newFields: object): array;
// }
// 

const addNewFields = (arr, newFields) => {
  return arr.map(item => {
    return {
      ...item,
      ...newFields
    };
  })
}

export default addNewFields;
