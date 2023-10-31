let arr = []

arr[0] = parseInt('2005', 10)
arr[1] = 27.97
arr[2] = "Косило Василь"
arr[3] = null

let User_ME =
{
    name_u : arr[2],
    age : arr[0],
    Sex : arr[3]
}

console.table({arr})
console.table({User_ME})