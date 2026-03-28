---
layout: post
title:  "Things done and learnings from founding a blockchain infrastructure startup"
author: vishesh gupta
description: Lessons from being 1st time CTO of a VC funded startup.
---

TLDR; TakeAway:


Systems built:
1. Blockchain indexer
2. NFT image cache
3. Blockchain Transaction Parsers for different Solana protocols. 
4. APIs to support common CRUD operations on blockchains like NFT and Token mint/read/update/transfers, 

Other things done:
1. Founding engineering team hiring
2. Technically oversight on important design decisions in code.

Things went well:
1. Successfully raised $300k from investors
2. Went from 0 to 100+ users in about 4 months, 
3. Built the business from scratch, scaled from 0 to 4M api requests per month. 
4. Really enjoyed exploring the blockchain dev tooling as a domain

Things that din't go well:
1. Co-Founder conflicts, leading to falling out.

Back Story:
Back in 2021, web3 was the rage. It was and still is the epitome distributed computing. After coming out of Playment, I was in hunt for the next technology adventure, and blockchains welcomed me with open arms. One fine day 2 friends reached out to me to help them build Shyft, with a simple idea to simplify software development on Blockchain.

Go to market problem statement:
Building blockchain applications are tuff because of multiple moving pieces to integrate and work with blockchain smart contract. We decided to simplify blockchain development experience by allowing web2 developers quickly integrate blockchain functionality over REST apis. 

Problem Discovery:<br>
One of us co-founder was a founding engineer in a gaming startup, which was trying to launch a token gamification system on Solana blockchain, and while building that integration he realized the pain in building, stitching and launching a production ready blockchain application. The few problem highlights were:
1. Any developer new to web3 needed to have good understanding of how blockchain works, this is complicated by the fact different blockchains work differently. 
2. Working with RPC node, 
  2.1. Managing request latencies when working with blockchain RPC node.
3. Blockchain or protocol specific SDK to do CRUD operations in onchain smart contracts. 
4. Being able to understand the smart contract code, (Rust, Solana), (Solidity, Etherum)
5. little-bit of tokenomics, high level understanding. 
6. Smart contract deployment pipeline, different for different chains. 

Technology Development Strategy:
Since we dint know if there would be actual buyers for this idea. We had to validate it and do it quick. We stripped down all our ambitions to 6 apis, that we will build in next weeks and launch. Idea was to launch fast, fail fast and learn fast.
After early traction, we moved ahead with moto of releasing to production every week. This generated the raw energy that fueled fast product development over next 6 months. 

1st Version:
As a result, the first version was a set of 6 apis on Solana blockchain, available in both development and production blockchain environments:
1. Read NFT
2. MINT NFT
3. Read Token
4. Mint Token
5. Read SOL Balance
6. Transfer/send SOL from source to destination address

Early used Tech stack:
1. mongoDb atlas: Database
2. NestJs, nodeJs for backend hosted on AWS ec2.
3. Demo front applications hosted on AWS Amplify
4. Route53 for DNS mappings
5. Postman, for api dev testing

Learning and actions:
1. We need a way to visualize the api usage metrics. To solve this we started recording api usage in a mongodb collection, and just used the data vizualizations in mongoDb Atlas queries on our mongodb data. 
2. Developers are reluctant to share their private keys over apis, for write operations. 
3. NFT listing and marketplaces, started asking more integration related queries in our community discord channels.









