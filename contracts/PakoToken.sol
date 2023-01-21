// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PakoToken is ERC20 {
    uint constant s_initialSupply = 100 * (10 ** 18);

    constructor() ERC20("PakoToken", "PKT") {
        _mint(msg.sender, s_initialSupply);
    }
}
