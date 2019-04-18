genOutput = [];

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
        genOutput.push(generate(o));
    });
}

// Generate HTML element
function generate(rowData){
    let g = rowData;
    return `<div width="${g.width}" height="${g.height}" color="${g.color}" backgroundColor="${g.bg_color}">${g.value}</div>`;
}

console.log(genOutput);

window.onload = fetchData('./data.json');