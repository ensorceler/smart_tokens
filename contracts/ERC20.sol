// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract ERC20 {
    string public constant NAME = "Melon Smart Token";
    string public constant SYMBOL = "MST";

    uint256 public immutable totalSupply = 20000;
    address payable public owner;

    mapping(address => uint256) balances;
    mapping(address => mapping(address => bool)) accessToWithdraw;
    mapping(address => mapping(address => uint256)) setAllowance;

    event Transfer(address _from, address _to, uint256 _value);
    event Approval(address _owner, address _spender, uint256 _value);

    constructor() payable {
        owner = payable(msg.sender);
        balances[owner] = totalSupply;
    }

    modifier checkAccessToWithdraw(address _from) {
        require(
            accessToWithdraw[_from][msg.sender] == true,
            "caller doesn't have access to the account he's trying to withdraw balance from"
        );
        _;
    }

    modifier checkAllowance(address _from, uint256 _value) {
        require(
            setAllowance[_from][msg.sender] >= _value,
            "allowance not enough to transfer money"
        );
        _;
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }

    function transfer(address payable _to, uint256 amount)
        public
        returns (bool)
    {
        if (balances[msg.sender] >= amount) {
            balances[msg.sender] -= amount;
            balances[_to] += amount;
            return true;
        } else
            revert(
                "Caller doesn't have enough balance to send given amount of token"
            );
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    )
        public
        checkAccessToWithdraw(_from)
        checkAllowance(_from, _value)
        returns (bool)
    {
        setAllowance[_from][msg.sender] -= _value;
        balances[_from] -= _value;
        balances[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public {
        if (balances[msg.sender] < _value) {
            revert("not enough balance to approve the given amount of token");
        }
        accessToWithdraw[msg.sender][_spender] = true;
        setAllowance[msg.sender][_spender] = _value;
    }

    function allowance(address _owner, address _spender)
        public
        view
        returns (uint256)
    {
        return setAllowance[_owner][_spender];
    }
}
