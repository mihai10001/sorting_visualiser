export async function bubbleSort(array: number[], highlightedIndexArray: number[], delay: number) {
  for(let i = 0; i < array.length - 1; i++)
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j+1]) {
        highlightedIndexArray[0] = j;
        highlightedIndexArray[1] = j + 1;
        await swap(array, j, j + 1, delay);
      }
    }
}
      
async function swap(array: number[], firstIndex: number, secondIndex: number, delay: number) {
  await sleep(delay);
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

