const removeFromArray = function(...args) {

    const array = args[0];
    const newArray = [];

    array.forEach((item) => {

        //aslinda silmek istedigimiz itemi eklemedik, diger argumanlar arraye eklenmeyecek.
        
        if(!args.includes(item)){

            newArray.push(item);
        }
    });

    return newArray;

};

module.exports = removeFromArray
