window.onload = fetchData('./data.json');

const feriBoard = document.getElementById('feriBoard');
elementCollection = [];

// Fetch data
function fetchData(fD){
    fetch(fD)
    .then(function(res){
        return res.json();
    })
    .then(function(aD){
        getData(aD);
    });
}

// Obtain data in JSON format
function getData(d){
    const mainData = d.data;
    const metaData = d.metadata;
    
    mainData.forEach((o) => {
        elementCollection.push(buildElement(o));
    });

    render(elementCollection);
}

// Generate HTML element
function buildElement(rowData){
    let g = rowData;
    return `<div style="width:${g.width}px; height:${g.height}px; color: ${g.color}; background-color: ${g.bg_color};">${g.value}</div>`;
}

// Render elements
function render(elements){
    output = '';
    elements.forEach((row) => {
        this.output += row;
    });

    feriBoard.innerHTML = output;
}