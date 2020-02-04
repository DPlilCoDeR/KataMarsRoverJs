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

    it('Check if robot makes the command forward(f)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'f';
        const positionAfterCommand = '1 , 0';
        let robertCommand = Robert.commands(command);
        assert.equal(robertCommand, positionAfterCommand);
    });

    it('Check if robot makes the command back(b)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'b';
        const positionAfterCommand = '-1 , 0';
        let robertCommand = Robert.commands(command);
        assert.equal(robertCommand, positionAfterCommand);
    });

    it('Check if robot makes the command left(l)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'l';
        const positionAfterCommand = '0 , -1';
        let robertCommand = Robert.commands(command);
        assert.equal(robertCommand, positionAfterCommand);
    });

    it('Check if robot makes the command right(r)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'r';
        const positionAfterCommand = '0 , 1';
        let robertCommand = Robert.commands(command);
        assert.equal(robertCommand, positionAfterCommand);
    });
});