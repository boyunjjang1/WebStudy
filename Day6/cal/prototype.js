class Prototype {
    constructor(cal) {
        cal.prototype.add = (a,b) => {
            return a+b;
        };
    
        cal.prototype.minus = (a,b) => {
            return a-b;
        };
    
        cal.prototype.multip = (a,b) => {
            return a*b;
        };
    
        cal.prototype.div = (a,b) => {
            return a/b;
        };
    }
}

module.exports = Prototype;