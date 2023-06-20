// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract DAOWorkers {
    address public owner;
    address[] public worker;

    constructor() {
        owner = msg.sender;
        worker.push(msg.sender);
    }

    function deposit() public payable {

    }

    function addWorker(address walletAddress) public  {
        require(msg.sender == owner);
        worker.push(walletAddress);
    }
    
    
    function getArrayLength() public view returns (uint) {
        return worker.length;
    }

    function withdraw(uint256 workNumber) public  {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(msg.sender == worker[workNumber], "You aren't the worker");
        payable(owner).transfer(address(this).balance);
    }

    function balance() external view returns(uint balanceEth) {
        balanceEth = address(this).balance;
    }

}

