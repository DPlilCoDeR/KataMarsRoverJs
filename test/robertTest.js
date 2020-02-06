const assert = require ('chai').assert;
const marsRobert = require ('../app/marsRobert');

describe('Test of MarsRobert', function () {

    it('check the initial position of robot', function () {
        let Robert;
        Robert = new marsRobert(0 , 0);
        const position = '0 , 0';
        let robertPosition = Robert.position;
        assert.equal(position,robertPosition);
    });

    it('Check the initial orientation of robot', function () {
        const orientation = 'N';
        const Robert = new marsRobert(orientation);
        let robertOrientation = Robert.orientation;
        assert.deepEqual(robertOrientation, orientation);
    });

    it('Check if robot makes the command move(m)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'm';
        const positionAfterCommand = '1 , 0';
        let robertCommand = Robert.commands(command);
        assert.equal(robertCommand, positionAfterCommand);
    });

    it('Check if robot makes the command left(l)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'l';
        const orientationAfterCommand = 'W';
        let robertCommand = Robert.commands(command);
        assert.equal(robertCommand, orientationAfterCommand);
    });

    it('Check if robot makes the command right(r)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'r';
        const orientationAfterCommand = 'E';
        let robertCommand = Robert.commands(command);
        assert.equal(robertCommand, orientationAfterCommand);
    });
});