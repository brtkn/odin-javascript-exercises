const leapYears = function(year) {

    const numYear = year;

    if ( numYear % 4 == 0 && numYear % 400 == 0 ) {

        return true;
    } else if ( numYear % 4 == 0 && numYear % 100 !== 0) {

        return true;
    }else {

        return false;
    }

}

module.exports = leapYears
