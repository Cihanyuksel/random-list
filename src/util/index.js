export function randomLists(arr, quantityInGroup) {
    const groups = [];
  
    const shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  
    for (let i = 0; i < shuffled.length; i = i + quantityInGroup) {
      const sliceShuffled = shuffled.slice(i, quantityInGroup + i);
  
      groups.push(sliceShuffled);
    }
  
    return groups;
  }


  const num = [1, 2, 3, 4, 5, 6]


  console.log(num.slice(0, 2))
  console.log(num.slice(2, 4))
  console.log(num.slice(4, 6))
  export function func (arr, quantityInGroup) {

    const emptyArr = [];

    const shuffled = arr
    .map(value => ({value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

    for(let i = 0; i < shuffled.length; i = i + quantityInGroup) {
        const slice = shuffled.slice(i, quantityInGroup + i)

        emptyArr.push(slice)
    }

    return shuffled
  }


  console.log(func(num, 2))