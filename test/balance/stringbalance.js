// test/balance/strinbalance.js   Mismo nombre que el controlador dentro de routes
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../app');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Balance 1 True', () => {
    it('should isBalance () true ', (done) => {
        chai.request(app).get('/strbalance/()').end((err, res) => {
            expect(res.body).to.be.true;
            done();
        });
    });
});

describe('Balance 1 True', () => {
    it('should isBalance (() false ', (done) => {
        chai.request(app).get('/strbalance/(()').end((err, res) => {
            expect(res.body).to.be.false;
            done();
        });
    });
});