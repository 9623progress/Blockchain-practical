// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WavePortal {
    uint256 public totalWaves; // Counter to track total waves

    event NewWave(address indexed from, uint256 timestamp);

    constructor() {
        totalWaves = 0;
    }

    function wave() public {
        totalWaves += 1;
        emit NewWave(msg.sender, block.timestamp);
    }
}
