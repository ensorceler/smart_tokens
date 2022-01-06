// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract ERC721 {
    string public constant NAME = "Melon NFT";
    string public constant SYMBOL = "MNFT";
    uint256 public constant totalSupply = 1000;
    mapping(uint256 => string) tokenLinks;
    address public contractOwner;

    mapping(uint256 => bool) NFTExists;
    mapping(address => uint256) countOfNFT;
    mapping(uint256 => address) ownerOfToken;

    mapping(address => mapping(address => mapping(uint256 => bool))) approvalForToken;
    // modifier declaration
    modifier checkNFTExists(uint256 _tokenId) {
        require(NFTExists[_tokenId] == true, " The given NFT doesn't exist");
        _;
    }
    modifier onlyOwner() {
        require(contractOwner == msg.sender, "The caller is not the owner");
        _;
    }

    //constructor
    constructor() payable {
        contractOwner = msg.sender;
    }

    function mint(
        address _to,
        uint256 _tokenId,
        string memory tokenlink
    ) public onlyOwner {
        NFTExists[_tokenId] = true;
        ownerOfToken[_tokenId] = _to;
        tokenLinks[_tokenId] = tokenlink;
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return countOfNFT[_owner];
    }

    function ownerOf(uint256 _tokenId)
        public
        view
        checkNFTExists(_tokenId)
        returns (address)
    {
        return ownerOfToken[_tokenId];
    }

    function approve(address _to, uint256 _tokenId)
        public
        checkNFTExists(_tokenId)
    {
        require(
            ownerOfToken[_tokenId] == msg.sender,
            "not an owner of this token"
        );

        approvalForToken[msg.sender][_to][_tokenId] = true;
        emit Approval(msg.sender, _to, _tokenId);
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) public checkNFTExists(_tokenId) {
        // makes sure that the caller has access given by the token
        require(
            (_from == msg.sender && ownerOfToken[_tokenId] == _from) ||
                approvalForToken[_from][msg.sender][_tokenId] == true
        );
        countOfNFT[_from] -= 1;
        delete approvalForToken[_from][msg.sender][_tokenId];
        ownerOfToken[_tokenId] = _to;
        countOfNFT[_to] += 1;
    }

    function takeOwnership(uint256 _tokenId) public checkNFTExists(_tokenId) {
        address oldOwner = ownerOfToken[_tokenId];
        address newOwner = msg.sender;

        require(newOwner != oldOwner, "you already own the token");

        require(
            approvalForToken[oldOwner][newOwner][_tokenId],
            "You have no approval from the owner of this token"
        );
        countOfNFT[oldOwner] -= 1;
        ownerOfToken[_tokenId] = newOwner;
        countOfNFT[newOwner] += 1;
        delete approvalForToken[oldOwner][newOwner][_tokenId];
    }

    function tokenMetaData(uint256 _tokenId)
        public
        view
        returns (string memory)
    {
        return tokenLinks[_tokenId];
    }

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _tokenId
    );
    event Approval(
        address indexed _from,
        address indexed _approved,
        uint256 _tokenId
    );
}
