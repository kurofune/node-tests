const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Nate', 41);
        expect(spy).toHaveBeenCalledWith('Nate', 41);
    });

    it('should call saveUser with user object', () => {
        var email = 'nate@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});