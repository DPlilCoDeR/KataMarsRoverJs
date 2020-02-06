module.exports = class marsRobert {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.position = x+ ' , '+y;
        this.orientation = 'N';
    }

    position = '0 , 0';
    orientation = ['N','E','S','W'];


    commands(command){
        if (command === 'm'){
            let xPlus = ++this.x;
            return this.position = xPlus+ ' , '+this.y;
        }

        if (command == 'l'){
            let leftorientation;
        }

        if (command == 'r'){
            let yPlus = ++this.y;
            return this.position = this.x+' , '+yPlus;
        }
    };
};

