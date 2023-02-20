import { ethers } from "hardhat";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";
import { expect } from "chai";

const deploy = async (name: string, ...args: any[]) => {
  const C = await ethers.getContractFactory(name);
  const contract = await C.deploy(...args);
  const res = await contract.deployed();
  const { deployTransaction } = res;
  const receipt = await deployTransaction.wait();
  return contract;
};


const generateData = (limit : number, chunkSize: number) => {
  function randomBn() {
    return ethers.BigNumber.from(ethers.utils.randomBytes(32));
  }
  let data : any = [] 
  let chunk : any = [
    [],
    []
  ]
  for (let index = 0; index < limit; index++) {
    const numberA = randomBn();
    const numberB = randomBn();
    chunk[0].push(numberA)
    chunk[1].push(numberB)
    if(chunk[0].length === chunkSize) {
      data.push([...chunk])
      chunk = [
        [],
        []
      ]
    }
  }
  return data
}

describe("WriteData", function () {

  this.timeout(60*1000)

  let contract : any

  const deployContracts = async (verbose = false) => {
    contract = await deploy('TestContract')
  }

  beforeEach(async () => {
    await deployContracts();
  });

  it("Should write data fast", async function () {

    const chunk_size = 150
    const testData = generateData(10_000, chunk_size)
    console.log('test data ready', testData.length)


    let tx
    let receipt
    let t0 = Date.now()
    let i = 0

    for (const [numbersA, numbersB] of testData) {
      console.log('write data chunk', i++, numbersA.length, 'after', Date.now()-t0, 'ms')
      tx = await contract.writeData(numbersA, numbersB)
      await tx.wait()
    }

    expect(true).to.equal(false)
  })

});
