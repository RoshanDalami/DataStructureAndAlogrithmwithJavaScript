function capitalizeFirst(arr){

    arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    return  capitalizeFirst(arr.slice(1))
    }
    console.log(capitalizeFirst(['roshan','dalami']))