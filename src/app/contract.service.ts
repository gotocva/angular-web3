import { Injectable } from '@angular/core';

import Web3 from 'web3';
import {HttpClient} from "@angular/common/http";

declare let require: any;
declare let window: any;

let tokenAbi = require('../tokenContract.json');

@Injectable()
export class ContractService {
  
    private web3: any;
    private contract: any;
    private contractAddress = "0x50B687F34496Dd1261908A303957F08d4EbD22A8";
    private INFURA_URL = "https://rinkeby.infura.io/v3/49709bb81fa74b15a224e25af168c1ce";

    constructor(private http:HttpClient) {
        this.connect();
    }

    public connect() {
        this.http.get('http://localhost:8000/abi').subscribe((response:any) => {
            console.log('response', response);
            const web3 = new Web3(new Web3.providers.HttpProvider(this.INFURA_URL))
            this.web3 = web3;
            this.contract = new web3.eth.Contract(response, this.contractAddress);
        })
    }

    public getTotalSupply() {
        this.contract.methods.totalSupply().call().then((result:any) => {
            console.log('result', result);
            return result;
        }).catch(function(err:any){
            console.log('err...\n'+err);
            return null;
        });
    }

    public getBalance(address: string) {
        this.web3.eth.getBalance(address, (err:any, result:any) => {
            if (err) {
                console.log(err)
            } else {
                console.log(this.web3.utils.fromWei(result, "ether") + " ETH")
                return this.web3.utils.fromWei(result, "ether");
            }
        })
    }
    
}