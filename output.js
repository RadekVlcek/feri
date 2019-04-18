function fetchData(fd){
    fetch(fd)
    .then(function(res){
        return res.json();
    })
    .then(function(ad){
        getData(ad);
    });
}

function getData(d){
    const mainData = d.data;
    const metaData = d.metadata;
    
    mainData.forEach((o) => {
        console.log(o);
    });
}

window.onload = fetchData('./data.json');