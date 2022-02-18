import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { MetaMaskService } from '../metamask.service';

@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.scss']
})
export class Web3Component implements OnInit {

  constructor(private metaMask:MetaMaskService, private contractService:ContractService) { }

  ngOnInit(): void {
    this.metaMask.getChainId().then((chainId:any) => {
      console.log('chainid', chainId);
    });
    this.metaMask.getWalletAddress().then((walletAddress:any) => {
      console.log('walletAddress', walletAddress);
    });
        
  }

}
