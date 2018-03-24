class clothesManager{
   

    constructor(){
    const cloth = require('./clothes.js');
    const list = [];
    
    list.push(new cloth('구찌벨트', 1000000, '구찌'));
    list.push(new cloth('프라다지갑', 800000, '프라다'));
    list.push(new cloth('루이비통가방', 3000000, '루이비통'));
    list.push(new cloth('샤넬화장품',200000, '샤넬'));
    list.push(new cloth('지방시옷', 500000, '지방시'));
    }
}

module.exports = clothesManager;