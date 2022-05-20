---
layout: post
title:  "Rendering a Colored Point Cloud in BLENDER."
author: vishesh gupta
---
### What is a NFT?
NFT stands for Non Fungible Token. The definition of word *Fungible* is 'replaceable by another identical item; mutually interchangeable'. Therefore a Non fungible token means that a token is only one of its kind and is not interchangeable with any other token. Simply put, it is a globally unique token. Some real world examples of NFTs are Mona Lisa, a human being, a peice of land etc.

### How is the value of a NFT decided?
The value of a NFT is decided by the community of people who sees it as an asset. For eg, to an art lover Mona Lisa is worth millions of dollars, but to someone who does not appreciate art it might be worth even 100 dollars.

### The Technical side of NFT
NFT is essentially a token registered in a smart contract on a blockchain. Few of the most notable NFT smart contract standards is [ERC 721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/). 

Openzeppelin is standard implementation of ERC 721 smart contract implementation and is also used to implement one of the most famous NFT collection i.e. *BAYC (Bored APE Yatch Club)*. Below is a snippet of code from the BAYC NFT contract:
```
contract ERC721 is
    Context,
    ERC165,
    IERC721,
    IERC721Metadata,
    IERC721Enumerable
{
    ....

     mapping(address => EnumerableSet.UintSet) private _holderTokens;

    // Enumerable mapping from token ids to their owners
    EnumerableMap.UintToAddressMap private _tokenOwners;

     // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

    // Base URI
    string private _baseURI;

    ....
}
```

In the above code block there are some declared vaiables:
1. _holderTokens : Tells all tokenIds owned by an address
2. _tokenOwners: Tells which address owns a particular tokenId
3. _tokenURIs: Tells the URI of metadata for a tokenId
4. _baseURI: The base URL of the metadata for this contract.

Now, lets take a look at the *mint()* function that gets called when a NFT token is created/minted:
```
function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _beforeTokenTransfer(address(0), to, tokenId);

        _holderTokens[to].add(tokenId);

        _tokenOwners.set(tokenId, to);

        emit Transfer(address(0), to, tokenId);
    }
```

In the above function input arguments represent:
1. `to`: The wallet address *to* which the minted token should be assigned.
2. `tokenId`: The tokenId to be minted and assigned to the address mentioned in 1st parameter.

In the above function 2 things are important:
1. `_holderTokens` mapping is updated with the tokenId. `tokenId` is added to the set of tokens which an address holds inside this smart contract.
2. `_tokenOwners` mapping is updated. A new entry is created in the map (tokenId => Address).

So, basically when a new token is minted the above mappnig variables are updated inside this contract. All these variables are stored and updated on blockchain, therefore once updated we can always tell who owns which tokens. The public function *(can be called from entites outside the scope of this contract)* in ERC 721 contracts to fetch this information is `ownerOf()`:
```
function ownerOf(uint256 tokenId)
        public
        view
        virtual
        override
        returns (address)
    {
        return
            _tokenOwners.get(
                tokenId,
                "ERC721: owner query for nonexistent token"
            );
    }
```

Similar to `_mint()` there is another function in ERC721 NFT smart contract that is called when you buy an existing NFT token from somebody else `_transfer()`:
```
    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {
        require(
            ERC721.ownerOf(tokenId) == from,
            "ERC721: transfer of token that is not own"
        ); // internal owner
        require(to != address(0), "ERC721: transfer to the zero address");

        _beforeTokenTransfer(from, to, tokenId);

        // Clear approvals from the previous owner
        _approve(address(0), tokenId);

        _holderTokens[from].remove(tokenId);
        _holderTokens[to].add(tokenId);

        _tokenOwners.set(tokenId, to);

        emit Transfer(from, to, tokenId);
    }
```

In the above code snippet below 3 lines are of prime important for the purpose of transferring the ownership of a token from one address to another:
```
_holderTokens[from].remove(tokenId);
_holderTokens[to].add(tokenId);
_tokenOwners.set(tokenId, to);
```

As you see here also, ownership tracking mapping variables `_holderTokens` and `_tokenOwners` are updated. 

