window.onload = fetchData('./data.json');

const HTMLferiBoard = document.getElementById('feriBoard');
const HTMLstyle = document.getElementById('style');
HTMLstyle.innerHTML = 'body { background-color: red; }';
var elementCollection = [];

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
    const columnData = savedData.columnData;
    const rowData = savedData.rowData;
    const metaData = savedData.metadata;
    
    columnData.forEach((row) => {
        elementCollection.push(`<div style="height: ${row[0].height}px">`);
        row.forEach((chunks) => {
            // 1 chunk = 1 DOM element
            elementCollection.push(buildElement(chunks));
        });

        elementCollection.push('</div>');
    });

    render(elementCollection);

    // console.log(elementCollection);
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

    HTMLferiBoard.innerHTML = output;
}