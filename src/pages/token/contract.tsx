import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-solidity";
import Pagination from "../../components/Pagination";
const exampleCode = `// ----------------------------------------------------------------------------
// ERC Token Standard #20 Interface
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
// ----------------------------------------------------------------------------
contract ERC20Interface {
    function totalSupply() public constant returns (uint);
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
`;

const tokenInfo = `
    string public constant name = "Token Name"; // token name
    string public constant symbol = "SYM"; // symbol
    uint8 public constant decimals = 18;  // 18 is the most common number of decimal places
`;
const SimpleCode = ({ code }: { code: string }) => {
  const codeElement = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current);
    }
  }, []);
  return (
    <pre className="rounded-lg max-w-screen-md">
      <code ref={codeElement} className={`language-solidity`}>
        {code}
      </code>
    </pre>
  );
};

const TokenContract = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl font-semibold">ERC20 smart contract</h1>
      <h3 className="text-lg">
        {" "}
        In Ethereum, smart contracts can be written in mainly two languages{" "}
        <a
          className="text-rose-500 underline"
          href="https://docs.soliditylang.org/en/v0.8.11/"
        >
          Solidity
        </a>{" "}
        and{" "}
        <a
          className="text-rose-500 underline"
          href="https://vyper.readthedocs.io/en/stable/"
        >
          Vyper
        </a>
        .
      </h3>

      <p className="text-md mt-4">
        Following is an interface contract declaring the required functions and
        events to meet the ERC20 standard
      </p>

      <SimpleCode code={exampleCode} />
      <p className="text-md font-normal">
        Some of the tokens include further information describing the token
        contract:
      </p>
      <SimpleCode code={tokenInfo} />
      <Pagination />
    </div>
  );
};

export default TokenContract;
