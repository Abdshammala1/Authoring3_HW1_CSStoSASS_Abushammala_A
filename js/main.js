(() => {
    //make an AJAX request using the Fetch API
    fetch('./data/classData.json')
   

    .then(res => res.json())
    .then(data => {
        debugger;
        console.log(data);
    //handle data
    
    })
   
    .catch((err) => {
        console.log(err);
    })

})();