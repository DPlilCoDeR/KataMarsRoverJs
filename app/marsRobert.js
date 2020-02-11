module.exports = class marsRobert {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.orientation = 'N';
    }

    getPosition(){
        return [this.x, this.y];
    }

    getOrientation(){
        return this.orientation;
    }
    execute(command){
        if(command === 'f'){
            this.move(command);
        }

        if(command === 'l' || command === 'r'){
            this.rotate(command);
        }
    };

    move(){
            if (this.orientation == 'N'){
                this.y++;
            }
            if (this.orientation == 'S'){
                this.y--;
            }
            if (this.orientation == 'W'){
                this.x--;
            }
            if (this.orientation == 'E'){
                this.x++;
            }
    }

    rotate(command){


        if (command == 'l'){
            if (this.orientation == 'N'){
                let newLeftorientation = 'W';
                this.orientation = newLeftorientation;
                return this.orientation;
            }
        }

        if (command == 'r'){
            if (this.orientation == 'N'){
                let newRightOrientation = 'E';
                this.orientation = newRightOrientation;
                return this.orientation;
            }
        }
    }

};

