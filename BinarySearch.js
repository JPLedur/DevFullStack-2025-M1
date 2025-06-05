function BinarySearch(arr, target){
    let left = 0
    let right = arr.length

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === target){
            return mid
        }
        else if(arr[mid] < target){
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }

    return -1 
}

let numbers = [3 , 5 , 7 , 8 , 10, 12, 13, 15, 17, 20, 22]

console.log(BinarySearch(numbers, 10))