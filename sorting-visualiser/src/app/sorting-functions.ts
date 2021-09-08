import { ResultsObjectClass } from './main-layout/services/results.service';

export type SortingFunctionObjectType = {
  [functionName: string]: SortingFunctionType
}

/* Interface for defining a sorting function */
type SortingFunctionType = (
  array: number[],
  highlightedIndexArray: number[],
  delay: number
) => Promise<ResultsObjectClass>


export const SortingFunctions: SortingFunctionObjectType = {
  'Bubble Sort': async (array: number[], highlightedIndexArray: number[], delay: number) => {
    let results: ResultsObjectClass = new ResultsObjectClass();

    for(let i = 0; i < array.length - 1; i++)
      for(let j = 0; j < array.length - i - 1; j++) {
        ++results.numberOfComparisons;
        if(array[j] > array[j+1]) {
          highlightedIndexArray[0] = j;
          highlightedIndexArray[1] = j + 1;
          ++results.numberOfSwaps;
          await swap(array, j, j + 1, delay);
        }
      }
    
    return results;
  },

  'QuickSort Recursive': async (array: number[], highlightedIndexArray: number[], delay: number) => {
    let results: ResultsObjectClass = new ResultsObjectClass();

    const partition = async (array: number[], left: number, right: number) => {
        let pivot = array[(left + right) >>> 1];

        while (left <= right) {
            ++results.numberOfComparisons;
            while (array[left] < pivot) { left++; ++results.numberOfComparisons;}
            while (array[right] > pivot) { right--; ++results.numberOfComparisons;}
            ++results.numberOfComparisons;
            if (left <= right) {
              highlightedIndexArray[0] = left;
              highlightedIndexArray[1] = right;
              ++results.numberOfSwaps;
              await swap(array, left, right, delay);
              left++; right--;
            }
        }
        return left;
    }

    const quickSort = async (array: number[], left: number, right: number) => {
        let mid: number = await partition(array, left, right);

        if (left < mid - 1) {
          ++results.numberOfComparisons;
          await quickSort(array, left, mid - 1);
        }
        if (right > mid) {
          ++results.numberOfComparisons;
          await quickSort(array, mid, right);
        }
    }

    await quickSort(array, 0, array.length - 1);
    return results;
  },
  }
};
      
async function swap(array: number[], firstIndex: number, secondIndex: number, delay: number) {
  await sleep(delay);
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

