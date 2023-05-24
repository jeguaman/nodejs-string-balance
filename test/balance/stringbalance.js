// test/balance/strinbalance.js   Mismo nombre que el controlador dentro de routes
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../app');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Validar String Balance 1', () => {
    it(' Debería devovler TRUE porque el string es \'()\' ', (done) => {
        chai.request(app)
            .get('/balance/()')
            .end((err, res) => {
                //expect(res.body).to.have.status(200);
                //expect(res.body.esValido).to.be.true;//Está lanzando undefined xD
                var jsonData = res.jsonData;
                console.log("JSON de respuesta: " + jsonData);
                expect(jsonData.esValido).to.be.true;
                //expect(res.body.esValido).to.be.true;//Está lanzando undefined xD
                done();
            })
            .catch((err, res) => {
                console.log(""+res);
                console.log(""+err);
                //console.log(""+res.esValido);
                //console.log(""+res.jsonData);
                
                
            });
    });
});

/*
describe('Validar String Balance 2', () => {
    it(' Debería devovler FALSO porque el string es \'(())\' ', (done) => {
        chai.request(app)
            .get('/balance/(()')
            .end((err, res) => {
                //expect(res.body).to.have.status(200);
                expect(res.body.esValido).to.be.false;//Está lanzando undefined xD
                done();
            });
    });
});*/