console.log('check it')

function countWovel(vowel){
    // debugger
    let count = 0;
    for(vou in vowel){
        if(['a','e','i','o','u'].includes(vowel[vou])){
            count = count + 1
            // console.log(vowel[vou])
         }
        // console.log(count)
    }

    return count
}

let result = countWovel('awais')
// console.log(result)


// reverse indexing functionality
function reverseIndexing(keyWord){
    for(let i = keyWord.length; i >= 0; i--){
        console.log(i)
    }
}

reverseIndexing('khan')

// Map Method functionality

function customMap(array, callback){
    let newarray = []
    for(let item of array){
        newarray.push(callback(item))
    }
    return newarray
}

function addMr(BName){
    let khan = `Mr ${BName}`;
    return khan
}

let result1 = customMap(['Abrar','Shehbaz','Sania','Hoor','Marium'],addMr)
console.log(result1)