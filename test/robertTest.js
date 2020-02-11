const assert = require ('chai').assert;
const expect = require('chai').expect;
const marsRobert = require ('../app/marsRobert');

describe('Test of MarsRobert', function () {

    it('check the initial position of robot', function () {
        const expectedPosition = [0 ,0];
        const Robert = new marsRobert();
        const [x, y] = Robert.getPosition();
        expect(expectedPosition).to.deep.equal([x, y]);
    });

    it('Check the initial orientation of robot', function () {
        const orientation = 'N';
        const Robert = new marsRobert();
        const robertOrientation = Robert.orientation;
        assert.deepEqual(robertOrientation, orientation);
    });

    it('Check if robot makes the command move(m)', function () {
        const Robert = new marsRobert();
        const command = 'f';
        Robert.execute(command);
        let robertCommand = Robert.getPosition();
        const positionAfterCommand = [0 , 1];
        expect(positionAfterCommand).to.deep.equal(robertCommand);
    });

    it('Check if robot makes the command left(l)', function () {
        const Robert = new marsRobert();
        const command = 'l';
        const orientationAfterCommand = 'W';
        Robert.execute(command);
        let robertCommand = Robert.getOrientation();
        assert.equal(robertCommand, orientationAfterCommand);
    });

    it('Check if robot makes the command right(r)', function () {
        const Robert = new marsRobert(0,0);
        const command = 'r';
        const orientationAfterCommand = 'E';
        Robert.execute(command);
        let robertCommand = Robert.getOrientation();
        assert.equal(robertCommand, orientationAfterCommand);
    });
});