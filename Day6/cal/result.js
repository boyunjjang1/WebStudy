var cal = new (require('./cal.js'))(); // new로 가져와야 hip 메모리에 들어감

function result(){
    console.log('2  + 3 = %d', cal.add(2,3));
    console.log('2  - 3 = %d', cal.minus(2,3));
    console.log('2  X 3 = %d', cal.multip(2,3));
    console.log('2  / 3 = %d', cal.div(2,3));
};

module.exports = result;