const { FileSystemWallet, X509WalletMixin } = require('fabric-network');
const path = require('path');

const name = process.env.IDENTITY_NAME || 'user';
const certificate = process.env.IDENTITY_CERTIFICATE || 'INVALID_CERT';
const privateKey = process.env.IDENTITY_PRIVATE_KEY || 'INVALID_KEY';
const mspID = process.env.MSP_ID || 'DEFAULT';

async function importToWallt() {
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = new FileSystemWallet(walletPath);
    walletMixin = X509WalletMixin.createIdentity(mspID, certificate, privateKey);
    await wallet.import(name, walletMixin)
}

importToWallt();
