// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Staking is ReentrancyGuard{
  IERC20 public s_stakingToken;

  uint private totalStakedTokens;
  uint public lastUpdateTime;

  mapping(address => uint) public stakedBalance;

  event Staked(address indexed user, uint256 indexed amount);
  
  constructor(address stakingToken) payable {
    s_stakingToken=IERC20(stakingToken);
  }

  function stake(uint amount) external nonReentrant {
    assert(amount > 0);
    totalStakedTokens += amount;
    stakedBalance[msg.sender] += amount;
    emit Staked(msg.sender,amount);
    bool success = s_stakingToken.transferFrom(msg.sender,address(this),amount);
    assert(success);
  }
}
