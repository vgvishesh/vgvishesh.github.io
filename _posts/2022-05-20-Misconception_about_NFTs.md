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

Openzeppelin is standard implementation of ERC 721 smart contract implementation and is also used to implement one of the most famous NFT collection i.e. *BAYC (Borea APE Yatch Club)*. Below is a snippet of code from the BAYC NFT contract:
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


