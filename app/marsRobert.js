module.exports = class marsRobert {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.position = x+ ' , '+y;
        this.orientation = 'N';
    }

    position = '0 , 0';
    orientation = 'N';


    commands(command){
        if (command === 'f'){
            let xPlus = ++this.x;
            return this.position = xPlus+ ' , '+this.y;
        }
        if (command == 'b'){
            let xLess = --this.x;
            return this.position = xLess+ ' , '+this.y;
        }
    };
};

