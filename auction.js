// Connect to the Ethereum network
var web3;
var address = '0xC6c8eF823583720194EC80359c7b0AFb6542568b';

async function Connect(){
 await window.web3.currentprovider.enable();
  web3=new web3(window.web3.currentprovider);
}
if(typeof web3 !== 'undefine'){
	web3=new web3(window.web3.currentprovider);

}
else{
	web3=new web3(new web3.provider.Httpprovider("HTTP://127.0.0.1:7545"));
}




// Define the ABI and contract address
var abi = [[
	{
		"inputs": [],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cancleAuc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endAuc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "finilize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "auctioner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "auctionstate",
		"outputs": [
			{
				"internalType": "enum auction.auc_state",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "bids",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestbidder",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]];

// Create contract instance
var contract = new web3.eth.contract(abi,address);


