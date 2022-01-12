// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract ERC721 {
    string public constant NAME = "Melon NFT";
    string public constant SYMBOL = "MNFT";
    uint256 public constant totalSupply = 1000;
    // to keep track of the nft if it actually exists or not
    mapping(uint256 => bool) nftExists;
    mapping(address => uint256) balances;

    mapping(uint256 => address) nftOwner;

    mapping(address => mapping(uint256 => address)) allowed;
    /** can transfer all the tokens on your behalf , use carefully */
    mapping(address => mapping(address => bool)) operator;

    address contractOwner;
    modifier onlyOwner() {
        require(contractOwner == msg.sender, "caller is not the owner");
        _;
    }
    modifier checkNFTExists(uint256 tokenId) {
        require(
            nftExists[tokenId] == true,
            "No NFT exists with the given token id"
        );
        _;
    }

    constructor() payable {
        contractOwner = msg.sender;
    }

    event Transfer(address from, address to, uint256 tokenId);
    event Approval(address owner, address approved, uint256 tokenId);

    event ApprovalForAll(address owner, address operator, bool approved);

    function mint(address to, uint256 tokenId) public onlyOwner {
        require(nftExists[tokenId] == false, "NFT already exists for this id");

        nftOwner[tokenId] = to;
        balances[to] += 1;
        nftExists[tokenId] = true;
    }

    function balanceOf(address owner) public view returns (uint256) {
        return balances[owner];
    }

    function ownerOf(uint256 tokenId)
        public
        view
        checkNFTExists(tokenId)
        returns (address)
    {
        return nftOwner[tokenId];
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public checkNFTExists(tokenId) {
        require(
            msg.sender == from ||
                allowed[from][tokenId] == msg.sender ||
                operator[from][msg.sender] == true,
            "you have no access to this nft(you are neither an owner or someone who is allowed by the owner"
        );
        balances[from] -= 1;
        balances[to] += 1;
        nftOwner[tokenId] = to;
        delete allowed[from][tokenId];
        delete operator[from][msg.sender];
    }

    function approve(address to, uint256 tokenId)
        public
        checkNFTExists(tokenId)
    {
        require(msg.sender == nftOwner[tokenId]);
        allowed[msg.sender][tokenId] = to;
    }

    /** There can only be one approved address per token at a given time */
    function getApproved(uint256 tokenId)
        public
        view
        checkNFTExists(tokenId)
        returns (address)
    {
        address owner_of_token = nftOwner[tokenId];
        // going to return the allowed individual
        return allowed[owner_of_token][tokenId];
    }

    function setApprovalForAll(address to, bool _approved) public {
        operator[msg.sender][to] = _approved;
        emit ApprovalForAll(msg.sender, to, _approved);
    }

    function isApprovedForAll(address _owner, address _operator)
        public
        view
        returns (bool)
    {
        return operator[_owner][_operator];
    }

    function exists(uint256 tokenId) public view returns (bool) {
        return nftExists[tokenId];
    }
}
