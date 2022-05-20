---
layout: post
title:  "Misconception about NFTs"
author: vishesh gupta
description: Under the hood of NFT ERC 721 Smart contracts and NFT ownerships.
---
![mfer](/assets/images/mfer.png){:width="30%"}
![boredApe](/assets/images/ca_bayc.png){:width="30%"}
![cryptoPunk](/assets/images/cp.png){:width="32%"}
## What is a NFT?
NFT stands for Non-Fungible Token. The definition of word *Fungible* is 'replaceable by another identical item; mutually interchangeable'. Therefore a Non-fungible token means that a token is only one of its kind and is not interchangeable with any other token. Simply put, it is a globally unique token. Some real world examples of NFTs are Mona Lisa, a human being, a peice of land etc.

## How is the value of a NFT decided?
The value of a NFT is decided by the community of people who sees it as an asset. For eg, to an art lover Mona Lisa is worth millions of dollars, but to someone who does not appreciate art it might not be worth even 100 dollars.

## What do you actually own when you buy a NFT token?
Is it the image that was displayed to you that you own, is it the properties of the NFT that you own? And what actually is ownership here?
To understand these questions we need to look into the technical side of NFTs in the section below. 

### The Technical side of NFTs
NFT is essentially a token registered in a smart contract on a blockchain. The most notable NFT smart contract standard is [ERC 721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/). 

Openzeppelin is standard implementation of ERC 721 smart contract standard and is also used to implement one of the most famous NFT collection i.e. *BAYC (Bored APE Yatch Club)*. Below is a snippet of code from the BAYC NFT contract, the entire source code for BAYC NFT contract can be found [here](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d#code).
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

So, basically when a new token is minted the above mappnig variables are updated inside this contract. All these variables are stored and updated on blockchain, therefore once updated we can always tell who owns which tokens. The public function *(a function that can be called from entites outside the scope of this contract)* in ERC 721 contracts to fetch this information is `ownerOf()`:
```
function ownerOf(uint256 tokenId)
        public
        view
        virtual
        override
        returns (address) {
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

As you see here also, *ownership tracking mapping variables* `_holderTokens` and `_tokenOwners` are updated. To summarise ERC 721 smart contracts maintain and updates the records of ownerships using these 2 variables. Since these variables are stored on blockchain therefore once you buy or mint a NFT then no one can change/corrupt the resultant variables states.

### Where is the Image/Digital asset that you bought?
Till now, we know what happens in the background when a NFT is minted or sold. So, you might ask all `this is grand but where is the image that I bought the NFT for?`. Lets see where is the image and how is it associated to the NFT. To explore this question we will use a BAYC *(Bored Ape Yatch Club)* NFT as an example : [7681](https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7681)<br>
<p align="center">
   <img src="/assets/images/BAYC.png" width="50%" />
</p>

So, from the opensea NFT token page we can get the BAYC contract's address deployed on Ethereum blockchain : [`0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D`](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d) 

Before we move ahead we need to understand **What is NFT metadata and how is it used?**<br>
Metadata of the NFT is a json that stores the details like image URI *(uniform resource identifier)* and properties of a NFT token. Most NFT contracts/collections uses decentralized storage to store this metadata like IPFS. But, since this metadata is a URI, it can be any address on the internet, even to a centralized storage like AWS. 

Now lets come back to the ERC721 contract's code snippet there was a variable called `_baseURI`. This is the variable which stores the base URI of the metadata directory for a NFT collection. This `_baseURI` can be set by the contract owner by calling the function `setBaseURI()` anytime.
```
function setBaseURI(string memory baseURI) public onlyOwner {
        _setBaseURI(baseURI);
    }
```
The URI of a `tokenId` is `{_baseURI}/{tokenID}`. One can read the function code for `tokenURI` method in the ERC 721 smart contract:
```
function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }
        // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
        return string(abi.encodePacked(base, tokenId.toString()));
    }
```

Now let try to see the metadata URI for the BAYC Token `#7681`. For this we will query `tokenURI()` function of the BAYC ERC 721 smart contract using the etherscan blockexplorer's [read contract functionality](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d#readContract).
![read tokenURI output](/assets/images/tokenURI.png)

Enter the tokenID: `7681` in the `tokenURI` function. This will return you the URI of this token: [`ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7681`](ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7681)


Now, lets open this ipfs file link by pasting this in the browser *(you might need to install ipfs plugin to open this link in chrome)*. When the link opens up we see that the link/URI points to a json file hosted/stored on IPFS network:
```
{
  "image": "ipfs://QmaELMvrkWZaXgvRsFDAqMnZ5UkxaLTGp6cZmz45zZRDfA",
  "attributes": [
    {
      "trait_type": "Fur",
      "value": "Trippy"
    },
    {
      "trait_type": "Mouth",
      "value": "Dumbfounded"
    },
    {
      "trait_type": "Eyes",
      "value": "Hypnotized"
    },
    {
      "trait_type": "Hat",
      "value": "King's Crown"
    },
    {
      "trait_type": "Background",
      "value": "Aquamarine"
    },
    {
      "trait_type": "Clothes",
      "value": "Smoking Jacket"
    }
  ]
}
```
This json is called the *`metadata`* of the NFT token `7681`. This metadata holds the information about the properties of your NFT and the URI to access the artwork.

In this metada json the `image` field has the URI to the actual image that you bought the NFT for: [`ipfs://QmaELMvrkWZaXgvRsFDAqMnZ5UkxaLTGp6cZmz45zZRDfA`](ipfs://QmaELMvrkWZaXgvRsFDAqMnZ5UkxaLTGp6cZmz45zZRDfA). <br> 
If you open this link then you can access the image/digital asset that you purchased. 


### So what do you own?
You might be thinking that since the metadata above is associated to the NFT token that you have bought, then you own this metadata and the links inside it. Right? <br>
Wrong, you dont and this is the **classical misconception about NFTs**. Since this metadata is public and can be viewed by anyone having access to internet, you do not have the permission to access control over this metadata. Moreover, the URI referred by `_baseURI` can be used to set the baseURI variable in any other contract, then the token of this new contract will also point to the metadata of BAYC NFT collection. You can try doing this by creating a new contract with the BaseURI of BAYC [here](https://docs.openzeppelin.com/contracts/4.x/wizard). 

Since the metadata can be viewed and accessed by anyone and any other contract can point to the same metadata and thus the image links inside it, so one might ask *where is the value in owning a NFT token* . The real value of owning a NFT token lies in the ownership variables in the NFT smart contract, `_tokenOwners` and `_holderTokens`, which proves that you own a token in the BAYC NFT contract present at blockchain address: [0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d).

It is this ownership inside the contract that will allow you to access value added services that the NFT collection owners may create for you in present/future. By proving the ownership of the token inside the BAYC NFT contract, you would be able to access the services that will be created only for BAYC token owners which nobody else would be able to access.

***So, next time you want to buy any NFT think about what services and products would you be able to access if you purchase that NFT token!***




