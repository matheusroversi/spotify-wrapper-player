import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify', () => {
    it('Should be an object', () => {
        expect(spotify).to.be.an('object');
    });

    it('Should have search exist', () => {
        expect(spotify.search).to.exist;
    });

    it('Should have album exist', () => {
        expect(spotify.album).to.exist;
    });
    
});