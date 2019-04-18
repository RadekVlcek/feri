renderData = [];

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
        saveRow(o, mainData.length);
    });
}

function saveRow(rowData, length){
    for(let i=0 ; i<length ; i++){
        
    }
}

window.onload = fetchData('./data.json');