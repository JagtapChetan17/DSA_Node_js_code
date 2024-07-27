function linear_search(arr,key)
{   
    let bool = false;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === key)
        {
            console.log("Element found at", i+1, "position.");
            bool = true;
        }
    }
    if(bool === false)
    {
        console.log("Element not found!");
    }
}

let arr = [7,12,13,17,21];
let key = 13;
linear_search(arr, key);