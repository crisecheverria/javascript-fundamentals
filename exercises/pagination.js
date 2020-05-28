/*
Create a simple pagination where:
items = [['p1', 1, 3], ['p2', 1, 4]] => p1(item name), 1(quantity), 3(price)
sortParameter = int => ['p1', 1, 3] p1 = 0, 1 = 1, 3 = 2
sortOrder = int => 0 ASC, 1 DESC
itemsPerPage = int
pageNumber = int

Input:
items = [['p1', 1, 3], ['p2', 1, 4]]
fetchItemsToDisplay(items, 0, 0, 1, 1)

Output: 
p1

*/
let items = [
  ['p1', 1, 4],
  ['p2', 1, 3],
  ['p3', 3, 3],
];
fetchItemsToDisplay(items, 0, 0, 1, 0);

function fetchItemsToDisplay(
  items,
  sortParameter,
  sortOrder,
  itemsPerPage,
  pageNumber
) {
  let result = [];
  let pageNum = pageNumber === 0 ? 1 : pageNumber;
  let lastIndex = pageNum * itemsPerPage;
  let startIndex = lastIndex - itemsPerPage;
  let currentPost = items.slice(startIndex, lastIndex);

  function compare(a, b) {
    const itemA = a[sortParameter];
    const itemB = b[sortParameter];

    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }

    return sortOrder === 0 ? comparison : comparison * -1;
  }

  let sortedItems = currentPost.sort(compare);

  sortedItems.forEach((item) => {
    result.push(item[0]);
  });

  return result.length > 1 ? result : result[0];
}
