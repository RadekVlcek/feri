function fetchData(data){
    fetch(data)
    .then(function(res){
        return res.json();
    })
    .then(function(final){
        getData(final);
    });
}

function getData(data){
    console.log(data.data, data.metadata)
}

window.onload = fetchData('./data.json');