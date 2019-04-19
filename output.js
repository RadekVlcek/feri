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

    feriBoard.innerHTML = output;
}