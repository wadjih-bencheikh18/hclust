var hclust = require('..');

describe('Hierarchical clustering test', function () {

    it('BIRCH test', function () {
        var birchData = [[2,6], [3,4], [3,8], [4,5], [4,7], [6,2], [7,2], [7,4], [8,4], [8,5]];
        var HC = new hclust.birch(birchData);
        var dend = HC.getDendogram();
        dend.dis.should.equal(0);
        HC.nClusters(3)[0][0][0].should.equal(6);
    });
});