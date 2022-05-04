// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IProjectBaseFactory.sol";

interface ICuratedProjectFactory is IProjectBaseFactory {
    function setCWTokenImpl(address _cwToken) external;

    function createProject(
        bytes32 _name,
        bytes32 _ipfsHash,
        bytes32 _cwUrl,
        address payable _beneficiary,
        address _acceptedToken,
        uint256 _threshold,
        uint256 _deadline,
        uint256 _curatorFee
    ) external returns (address);
}