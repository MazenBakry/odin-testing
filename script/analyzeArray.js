function getSum(arr){
    let total = 0;
    for (let nums in arr){
        total += arr[nums];
    }
    return total;
}

function findMin(arr){
    let minNum = arr[0];
    for(let nums in arr){
        if(arr[nums] < minNum){
            minNum = arr[nums];
        }
    }
    return minNum;
}

function findMax(arr){
    let maxNum = arr[0];
    for(let nums in arr){
        if(arr[nums] > maxNum){
            maxNum = arr[nums];
        }
    }
    return maxNum;
}

export default function analyzeArray(arr){
    const object = {
        average: getSum(arr)/arr.length,
        min: findMin(arr),
        max: findMax(arr),
        length: arr.length,
    }
    return object;
}
