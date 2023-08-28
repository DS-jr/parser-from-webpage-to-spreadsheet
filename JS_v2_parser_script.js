const table1 = document.querySelector('tbody').children; 

let final_str = '';

for (let k = 0; k < table1.length; k++) {
    let row = table1[k];
    const row_array = [];
    for (let j = 0; j < row.children.length; j++) 
        row_array.push(row.children[j].innerText);
    final_str += row_array.join(';').replaceAll('\n', '*') + '\n';
    // console.log(row_array.join(';'));
        // arr2.push(row.children[j]);
}

console.log(final_str);



// const arr2 = []; 
// const arr3 = []; 

// for (let j = 0; j < arr2.length; j++) {
//     arr3.push(arr2[j].children[j].innerText); 
// }


// for (let i = 0; i < nestedArray.length; i++) {
//     for (let j = 0; j < nestedArray[i].length; j++) {
//         console.log(`nestedArray[${i}][${j}] = ${nestedArray[i][j]}`);
//     }
// }
    

// const var2 = arr2[0].children[0].innerText; 
// console.log(var2); 


// const csvString = var2.join(',');

// console.log(csvString); 
// console.log(arr2); 
// console.log(arr3); 
