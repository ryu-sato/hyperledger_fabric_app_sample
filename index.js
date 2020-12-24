const { FileSystemWallet, Gateway } = require('fabric-network');
const path = require('path');

const connectionProfile = {
    "name": "hyperledger_fabric_app_sample",
    "version": "1.0.0",
    "channels": {
        "myc": {
            "orderers": [
                "orderer1"
            ],
            "peers": {
                "peer1": {
                    "endosingPeer": true,
                    "chaincodeQuery": true,
                    "ledgerQuery": true,
                    "eventSource": true,
                    "discover": false
                }
            }
        }
    },
    "peers": {
        "peer1": {
            "url": "grpc://localhost:7051"
        }
    },
    "orderers": {
        "orderer1": {
            "url": "grpc://localhost:7050"
        }
    }
};

async function invoke() {
    // Walletを読み込む
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    const adminExists = await wallet.exists('admin');
    if (!adminExists) {
        console.log('"admin" is not exists. You need import wallet before invoke transaction.');
        return;
    }

    // Fabric ネットワークへ接続する
    const gateway = new Gateway();
    await gateway.connect(connectionProfile, { wallet, identity: 'admin', discovery: { enabled: false, asLocalhost: true } });

    // helloChaincode トランザクションを実行する
    const network = await gateway.getNetwork('myc');
    const contract = network.getContract('hello');
    const result = await contract.submitTransaction('helloChaincode');
    console.log(`helloChaincode returns ${result}`);

    // Fabric ネットワークを切断する
    await gateway.disconnect();
}

invoke();
