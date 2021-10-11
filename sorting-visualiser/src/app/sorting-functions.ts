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

  'QuickSort Iterative': async (array: number[], highlightedIndexArray: number[], delay: number) => {
    let results: ResultsObjectClass = new ResultsObjectClass();

    const partitionHigh = async (array: number[], left: number, right: number) => {
      let pivot = array[right];
      let i = left;
      
      for(let j = left; j < right; j++) {
        ++results.numberOfComparisons;
        if(array[j] <= pivot) {
          highlightedIndexArray[0] = i;
          highlightedIndexArray[1] = j;
          ++results.numberOfSwaps;
          await swap(array, i, j, delay);
          i++;
        }
      }

      highlightedIndexArray[0] = i;
      highlightedIndexArray[1] = right;
      ++results.numberOfSwaps;
      await swap(array, i, right, delay);
      return i;
    }
    
    const iterativeQuickSort = async (array: number[]) => {
      let stack = [];
      let start = 0;
      let end = array.length - 1;
      
      stack.push({x: start, y: end});
      
      while(stack.length) {
        ++results.numberOfComparisons;
        const { x, y }: { x: number ; y: number }  = stack.shift() || { x: start, y: end };
        const partition: number = await partitionHigh(array, x, y);
        
        if(partition - 1 > x) {
          ++results.numberOfComparisons;
          stack.push({x: x, y: partition - 1});
        }
        if(partition + 1 < y) {
          ++results.numberOfComparisons;
          stack.push({x: partition + 1, y: y});
        }
      }
    }

    await iterativeQuickSort(array);
    return results;
  },

  'BogoSort (DumbSort)': async (array: number[], highlightedIndexArray: number[], delay: number) => {
    let results: ResultsObjectClass = new ResultsObjectClass();

    const shuffle = async (array: number[]) => {
      for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
      return array;
    };
    
    const isSorted = async (array: number[]) => {
      for (let i = 1; i < array.length; i++) {
        ++results.numberOfComparisons;
        if (array[i-1] > array[i])
          return false;
      }
      return true;
    };
    
    const bogoSort = async (array: number[]) => {
      let sorted = false;

      const t0 = performance.now();
      while (sorted == false) {
        ++results.numberOfComparisons;
        await sleep(delay * 5);
        array = await shuffle(array);
        sorted = await isSorted(array);

        const t1 = performance.now();
        if (((t1 - t0) / 1000) > 10)
          return array;
      }
      return array;
    };

    await bogoSort(array);
    return results;
  },

  'SelectionSort': async (array: number[], highlightedIndexArray: number[], delay: number) => {
    let results: ResultsObjectClass = new ResultsObjectClass();

    for (let i = 0; i <= array.length - 1; i++) {
      ++results.numberOfComparisons;
      let minIndex = i;
  
      for (let j = i; j <= array.length - 1; j++) {
        ++results.numberOfComparisons;
        if (array[j] < array[minIndex]) {
          minIndex = j;
          highlightedIndexArray[0] = j;
          highlightedIndexArray[1] = minIndex;
        }
      }

      ++results.numberOfComparisons;
      if (array[i] > array[minIndex]) {
        ++results.numberOfSwaps;
        await swap(array, i, minIndex, delay);
      }
    }
  
    return results;
  },

  'RytooSort (SelectionSort)': async (array: number[], highlightedIndexArray: number[], delay: number) => {
    let results: ResultsObjectClass = new ResultsObjectClass();

    const rytooSort = async (array: number[], lastIndex: number) => {
        let max = array[0];
        let maxIndex = 0;
    
        for (let i = 1; i < lastIndex + 1; i++) {
          ++results.numberOfComparisons;
          if (array[i] > max) {
              maxIndex = i;
              max = array[i];
              highlightedIndexArray[0] = i;
              highlightedIndexArray[1] = lastIndex;
          }
        }

        ++results.numberOfSwaps;
        await swap(array, maxIndex, lastIndex, delay);

      ++results.numberOfComparisons;
      if (lastIndex > 0)
        await rytooSort(array, lastIndex - 1);
    };

    await rytooSort(array, array.length - 1);
    return results;
  },
      }
    };

    await rytooSort(array, array.length - 1);
    return results;
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

