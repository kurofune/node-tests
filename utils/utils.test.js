const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(10);

    expect(res).toBe(100).toBeA('number');
    
    // if (res !== 100) {
    //     throw new Error(`Expected 100, but got ${res}`);
    // }
});

it('should asyc square a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    });
});

// it('should expect some values', () => {
//     //expect(12).toNotBe(12);
//     //expect(12).toNotBe(12);
//     //expect({name: 'Nate'}).toEqual({name: 'Nate'});
//     //expect([2,3,4]).toInclude(2);
//     expect({
//         name: 'Nate',
//         age: 41,
//         location: 'Long Beach'
//     }).toInclude({
//         age: 41
//     })
// })

it('should set firstName and lastName', () => {
    var user = {
        age: 41,
        location: 'Long Beach'
    };

    var res = utils.setName(user, 'Nate Gross');
    // console.log (res);
    expect(res).toInclude({
        firstName: 'Nate',
        lastName: 'Gross'
    }).toBeA('object');
});