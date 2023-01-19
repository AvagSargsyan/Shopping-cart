// Function API:
// interface shortenText {
//   (str: string, length: number): string;
// }
// 

const shortenText = (str, length) => {
  if (str.length > length) {
    return str.split('').slice(0, length + 1).join('') + '...';
  }

  return str;
}

export default shortenText;
