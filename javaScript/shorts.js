var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
    console.log('shorts')}
    else { 
        suitcase.shorts = "red";
        console.log(suitcase.shorts);
    }