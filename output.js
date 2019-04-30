/**
 * 1 function to compose and render boardData
 * 1 function to compose and render rowData
 * 1 function to compose and render columnData
 */

/**
 * Function to handle HTML
 * Function to handle CSS
 */

window.onload = fetchData('./data.json');

const HTMLBoard = document.getElementById('board');
const HTMLstyle = document.getElementById('style');
HTMLstyle.innerHTML = '#board { border: 1px solid black; }';

var elementCollection = [];

var HtmldataToRender = [];

// Data saved from GET request
var savedData;

// Fetch data
function fetchData(fD){
    fetch(fD)
    .then(function(res){
        return res.json();
    })
    .then(function(aD){
        savedData = aD;
        extractData(savedData);
    });
}

// Obtain data in JSON format
function extractData(savedData){
    const boardData = savedData.boardData;
    const rowData = savedData.rowData;
    const columnData = savedData.columnData;

    // console.log('Board data', boardData);
    // console.log('Row data', rowData);
    // console.log('Column data', columnData);


    columnData.forEach((row) => {
        elementCollection.push(`<div style="height: ${row[0].height}px">`);
        row.forEach((chunks) => {
            // 1 chunk = 1 DOM element
            elementCollection.push(buildElement(chunks));
        });

        elementCollection.push('</div>');
    });

    render(elementCollection);

    // testing
    handleBoardData(boardData);
    handleRowData(rowData);
    handleColumnData(columnData);
   
    // console.log(HtmldataToRender);

    // TEST

    var board = HtmldataToRender[0];
    var rows = HtmldataToRender[1];
    var columns = HtmldataToRender[2];

    for(b in board){        
        console.log(board[b]);

        for(r in rows){
            console.log(rows[r]);

            for(c in rows){
                console.log(columns[c]);

            }
        }
    }
}

board = ["<div id='board'>", "</div>"];
rows = [`<div id="row1">`, "</div>", `<div id="row2">`, "</div>"];
columns = [];

function handleBoardData(){
    HtmldataToRender.push(["<div id='board'>", "<BOAAARD/div>"]);
}

function handleRowData(rowData){
    var tempOutput = [];
    
    for(row in rowData){
        tempOutput.push(`<div id="row${(row)}">`);
        tempOutput.push("<ROOOW/div>");
    }

    HtmldataToRender.push(tempOutput);
}

function handleColumnData(columnData){
    var tempOutput = [];

    columnData.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            let index = `${rowIndex}${columnIndex}`;
            let value = column.value;
            if(value != ''){
                var id = `${value}${index}`;
            }   
            else {
                var id = `empty${index}`;
            }
            
            tempOutput.push(`<span id="${id}">${value}`);
            tempOutput.push("</span>");
        });
    });

    HtmldataToRender.push(tempOutput);
}



// Generate HTML element
function buildElement(rowData){
    let g = rowData;
    return `<span
    style="float:left;
    width: ${g.width}px;
    height: ${g.height}px;
    color: ${g.color};
    background-color: ${g.background_color};
    font-family: ${g.font_family};
    font-size: ${g.font_size+4}px;
    text-align: ${g.text_align};
    vertical-align: ${g.vertical_align}">
    ${g.value}
    </span>`;
}

// Render elements
function render(elements){
    output = '';
    elements.forEach((row) => {
        this.output += row;
    });

    HTMLBoard.innerHTML = output;
}