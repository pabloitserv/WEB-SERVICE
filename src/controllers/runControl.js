const dao = require('../dao/run.dao.js');
const request = require('superagent');
const Run = require('../schemas/run.schema.js');

function getRun(req, res, next) {

    var usuario = req.params.usuario;
    var veiculo = req.params.carro;
    var flag = req.params.flag;

    let datas = {
        $gte: req.params.$gte,
        $lte: req.params.$lte
    }

    if (flag == 0) {
        var query = {
            deviceStarDate: datas,
            car: veiculo
        }
    } else
    if (flag == 1) {
        var query = {
            deviceStarDate: datas,
            user: usuario
        }
    } else
    if (flag == 2) {
        var query = {
            deviceStarDate: datas
        }
    }


    dao.findRun(query, {}).exec((err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }

    });
}

function createRun(req, res, next) {
    let params = req.params;

    dao.createRun(params).save((err, data) => {
        return res.json(err ? err : data);
    });
}

module.exports = {
    get: getRun,
    post: createRun
}