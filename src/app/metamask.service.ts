import { Injectable } from '@angular/core';

import detectEthereumProvider from '@metamask/detect-provider'

@Injectable()
export class MetaMaskService {

  public ethereum: any;

  constructor() { this.init(); }

  public async init() {
    const provider = await detectEthereumProvider();
    if (provider != window.ethereum) {
      alert('You have multiple wallets');
    } else {
      this.ethereum = provider;
      this.metamastListener();
    }
  }

  public async getChainId() : Promise<void> {
    return await this.ethereum.request({ method: 'eth_chainId' });
  }

  public async getWalletAddress() : Promise<void> {
    const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' }).catch((err:any) => {return null;});
    return accounts[0];
  }
  

  /**
   * initiate metamask listeners
   */
  public metamastListener() {
    // Listener
    this.ethereum.on('accountsChanged', (accounts:any) => {
    //   this.setAccount(accounts[0], this.ethereum.chainId, 'metamask');
    });
    this.ethereum.on('chainChanged', (chainId:any) => {
    //   this.setAccount(this.account.address, chainId, 'metamask');
    });
  }

}