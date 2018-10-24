const SVSTCrowdsale = artifacts.require('./SVSTCrowdsale.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner =  "0xb10Dc0448571f33d0Fe695760eCfA6378224e8Aa";
    var wallet = "0xb10Dc0448571f33d0Fe695760eCfA6378224e8Aa";

    deployer.deploy(SVSTCrowdsale, owner, wallet);
};
