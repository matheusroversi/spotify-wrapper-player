import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';


describe('AlbumInfo', () => {
    // 0ms === 0:00
    it('Shoult receive 0ms and convert to 0:00', () => {
        expect(convertToHumanTime(0)).to.be.equal('0:00');
    });

    // 1000ms === 0:01
    it('Shoult receive 1000ms and convert to 0:01', () => {
        expect(convertToHumanTime(1000)).to.be.equal('0:01');
    });

    // 1100ms === 0:11
    it('Shoult receive 11000ms  convert to 0:11', () => {
        expect(convertToHumanTime(11000)).to.be.equal('0:11');
    });

    // 60000ms === 1:00
    it('Shoult receive 60000  convert to 1:00', () => {
        expect(convertToHumanTime(60000)).to.be.equal('1:00');
    });


});