import logo from './logo.svg';
import './App.css';
import contract from './contracts/PawPrints.json';
import Web3 from 'web3';
//import Transaction from '@ethereumjs/tx'; // <-- updated import
import {Buffer} from 'buffer';
const contractAddress = "0x19Ed0De34A310Cf8d51a9E78a106a5c044B9b516";
const abi = contract.abi;


function App() {

  const rpcURL = "https://rpc-mumbai.maticvigil.com/";
  const web3 = new Web3(rpcURL);
  const account = "0xDbeD1643BC6CDd7983d51Fac486723bBA75DE418";
  web3.eth.getBalance(account, (err, wei) => {
    const balance = web3.utils.fromWei(wei, 'ether')
    console.log(balance)
  })

  
// const privateKey1 = Buffer.from('8a44399ff29f878fdfa6cd371f7a7e6655240c211ceea62ea0566fe7bc82dbfe', 'hex')

// web3.eth.getTransactionCount(account, (err, txCount) => {
//     const data = '608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610fd3806100616000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b1461015c5780639955f67c1461017a578063aa2fedde14610198578063c19d93fb146101b6578063d3f0c8bb146101d45761009e565b80632c16cd8a146100a357806336a6badd146100d6578063398933ca146100f45780636cd7751f146101105780638c8b41121461012c575b600080fd5b6100bd60048036038101906100b891906109fd565b6101de565b6040516100cd9493929190610a39565b60405180910390f35b6100de61020e565b6040516100eb9190610ae2565b60405180910390f35b61010e60048036038101906101099190610b5b565b610268565b005b61012a60048036038101906101259190610bd6565b6103d3565b005b61014660048036038101906101419190610c3b565b61052d565b6040516101539190610c9d565b60405180910390f35b610164610777565b6040516101719190610cc7565b60405180910390f35b61018261079b565b60405161018f9190610cc7565b60405180910390f35b6101a06107c1565b6040516101ad9190610cc7565b60405180910390f35b6101be6107e7565b6040516101cb9190610d59565b60405180910390f35b6101dc6107fa565b005b60036020528060005260406000206000915090508060000154908060010154908060020154908060030154905084565b61021661099a565b6000600360006001815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820154815260200160038201548152505090508091505090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ef90610dd1565b60405180910390fd5b7f8a4335bd3facea1bfaf95771e37917d7f43ff5f64d26d19f43e8a1c931ddeb0160405160405180910390a1806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360006001815260200190815260200160002090508581600001819055508481600101819055508381600201819055508281600301819055506000600460006101000a81548160ff021916908360048111156103c6576103c5610ce2565b5b0217905550505050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415801561047f5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b6104be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b590610e3d565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460006101000a81548160ff0219169083600481111561052557610524610ce2565b5b021790555050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b690610ecf565b60405180910390fd5b60018060048111156105d4576105d3610ce2565b5b600460009054906101000a900460ff1660048111156105f6576105f5610ce2565b5b148015610636575060048081111561061157610610610ce2565b5b600460009054906101000a900460ff16600481111561063357610632610ce2565b5b14155b610675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066c90610f3b565b60405180910390fd5b7fbbb82d89ae6cb278e0333b446560e83d91184e64026c1c4ee85d8eaba065a96c60405160405180910390a182156106b0576001915061076f565b60008573ffffffffffffffffffffffffffffffffffffffff166325ace2a76040518163ffffffff1660e01b81526004016020604051808303816000875af11580156106ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107239190610f70565b905080801561072f5750845b15610769576002600460006101000a81548160ff0219169083600481111561075a57610759610ce2565b5b0217905550600192505061076f565b60009250505b509392505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461088a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088190610ecf565b60405180910390fd5b600280600481111561089f5761089e610ce2565b5b600460009054906101000a900460ff1660048111156108c1576108c0610ce2565b5b14801561090157506004808111156108dc576108db610ce2565b5b600460009054906101000a900460ff1660048111156108fe576108fd610ce2565b5b14155b610940576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093790610f3b565b60405180910390fd5b7f61e2929ac66c18729e4b0d88c57278b64a58b35bbb02d8561220164d475c5f5d60405160405180910390a16003600460006101000a81548160ff0219169083600481111561099257610991610ce2565b5b021790555050565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b600080fd5b6000819050919050565b6109da816109c7565b81146109e557600080fd5b50565b6000813590506109f7816109d1565b92915050565b600060208284031215610a1357610a126109c2565b5b6000610a21848285016109e8565b91505092915050565b610a33816109c7565b82525050565b6000608082019050610a4e6000830187610a2a565b610a5b6020830186610a2a565b610a686040830185610a2a565b610a756060830184610a2a565b95945050505050565b610a87816109c7565b82525050565b608082016000820151610aa36000850182610a7e565b506020820151610ab66020850182610a7e565b506040820151610ac96040850182610a7e565b506060820151610adc6060850182610a7e565b50505050565b6000608082019050610af76000830184610a8d565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b2882610afd565b9050919050565b610b3881610b1d565b8114610b4357600080fd5b50565b600081359050610b5581610b2f565b92915050565b600080600080600060a08688031215610b7757610b766109c2565b5b6000610b85888289016109e8565b9550506020610b96888289016109e8565b9450506040610ba7888289016109e8565b9350506060610bb8888289016109e8565b9250506080610bc988828901610b46565b9150509295509295909350565b600060208284031215610bec57610beb6109c2565b5b6000610bfa84828501610b46565b91505092915050565b60008115159050919050565b610c1881610c03565b8114610c2357600080fd5b50565b600081359050610c3581610c0f565b92915050565b600080600060608486031215610c5457610c536109c2565b5b6000610c6286828701610b46565b9350506020610c7386828701610c26565b9250506040610c8486828701610c26565b9150509250925092565b610c9781610c03565b82525050565b6000602082019050610cb26000830184610c8e565b92915050565b610cc181610b1d565b82525050565b6000602082019050610cdc6000830184610cb8565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60058110610d2257610d21610ce2565b5b50565b6000819050610d3382610d11565b919050565b6000610d4382610d25565b9050919050565b610d5381610d38565b82525050565b6000602082019050610d6e6000830184610d4a565b92915050565b600082825260208201905092915050565b7f4f6e6c7920484f53504954414c2063616e2063616c6c20746869732e00000000600082015250565b6000610dbb601c83610d74565b9150610dc682610d85565b602082019050919050565b60006020820190508181036000830152610dea81610dae565b9050919050565b7f4f6e6c7920504554204f574e45522063616e2063616c6c20746869732e000000600082015250565b6000610e27601d83610d74565b9150610e3282610df1565b602082019050919050565b60006020820190508181036000830152610e5681610e1a565b9050919050565b7f4f6e6c7920494e535552414e43452050524f56494445522063616e2063616c6c60008201527f20746869732e0000000000000000000000000000000000000000000000000000602082015250565b6000610eb9602683610d74565b9150610ec482610e5d565b604082019050919050565b60006020820190508181036000830152610ee881610eac565b9050919050565b7f496e76616c6964206f72204f7574206f662053746174652e0000000000000000600082015250565b6000610f25601883610d74565b9150610f3082610eef565b602082019050919050565b60006020820190508181036000830152610f5481610f18565b9050919050565b600081519050610f6a81610c0f565b92915050565b600060208284031215610f8657610f856109c2565b5b6000610f9484828501610f5b565b9150509291505056fea26469706673582212204d7ccb3e6cc5a255b8dce0f5f4be1c7c79e0e55a921ea83e4901c478d9bde02164736f6c63430008120033'
  
//     const txObject = {
//       nonce:    web3.utils.toHex(txCount),
//       gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//       data: data
//     }
  
//     const tx = new Transaction(txObject)
//     tx.sign(privateKey1)
  
//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')
  
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//       console.log('err:', err, 'txHash:', txHash)
//       // Use this txHash to find the contract on Etherscan!
//     })
  // })


return (
  <div className='main-app'>
    <h1>Scrappy Squirrels Tutorial</h1>
    <div>

    </div>
  </div>
)
}

export default App;
