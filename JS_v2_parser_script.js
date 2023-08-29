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




// (task) "create javascript code to parse data from a webpage and put this data automatically to my GoogleSheet spreadsheet"


// (CDL)  (v1) From GPT3.5: 

// npm install axios googleapis   // In the repo via Terminal

// const axios = require('axios');
// const { google } = require('googleapis');

// // Google Sheets API credentials
// const credentials = require('path_to_your_credentials_file.json');
// const spreadsheetId = 'your_spreadsheet_id';
// const range = 'Sheet1!A1'; // Change this to your desired range

// // Webpage URL to fetch data from
// const webpageUrl = 'https://example.com';

// // Axios request to fetch data from the webpage
// axios.get(webpageUrl)
//   .then(response => {
//     const dataToPutInSheet = response.data; // Modify this based on your parsing logic

//     // Authorize and set up Google Sheets API
//     const auth = new google.auth.GoogleAuth({
//       credentials,
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     const sheets = google.sheets({ version: 'v4', auth });

//     // Update the Google Sheet with the fetched data
//     sheets.spreadsheets.values.update({
//       spreadsheetId,
//       range,
//       valueInputOption: 'RAW',
//       resource: {
//         values: [[dataToPutInSheet]],
//       },
//     })
//     .then(() => {
//       console.log('Data updated successfully in Google Sheet.');
//     })
//     .catch(error => {
//       console.error('Error updating Google Sheet:', error);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching data from the webpage:', error);
//   });




// (CDL)  (v2) From Bard: 

// In the repo via Terminal: 
// npm install fetch
// npm install @google/spreadsheet 

// import fetch from "fetch";
// import { SpreadsheetApp } from "@google/spreadsheet";

// function parseData(url) {
//   // Get the data from the webpage.
//   var data = fetch(url).then(response => response.text());

//   // Parse the data into a JavaScript object.
//   var parsedData = JSON.parse(data);

//   // Write the data to the Google Sheet.
//   var spreadsheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
//   var sheet = spreadsheet.getActiveSheet();

//   // Loop through the data and add each row to the sheet.
//   for (var i in parsedData) {
//     sheet.appendRow(parsedData[i]);
//   }
// }

// // Set the URL of the webpage that contains the data.
// var url = "https://www.example.com/data.json";

// // Parse the data and put it in the Google Sheet.
// parseData(url);







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
