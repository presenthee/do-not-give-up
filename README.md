# Do Not Give Up

## Background

<img width="313" alt="dngu" src="https://github.com/woooosung/ts_prototype/blob/develop/do-not-give-up/public/dngu.png">

Can we use Blockchain as an Edu Data Marketplace?

1. Record all study data generated by users on the blockchain.
3. DGNU receives payment from companies which buy data. A portion of these profits would be distributed to students as rewards.
4. A portion of these profits would be distributed to users as rewards, transparently.
5. Also, blockchain is used to track data provision accurately and disclose data usage transparently.

## Functionalities

- Dashboard
- Competition
- Ranking

## Implementation

### Frontend
- Next.js

### Backend
- Google Firebase - Back-up storage for basic user information.

### Blockchain
- Solidity - For smart contracts.
- Remix - IDE for developing smart contract (compile & deploy).
- Sepolia Test Network - deploy env for our web3.0 application prototype.

### Deployment
- Vercel - to deploy our web prototype.

## Getting Started With Dev Server

### Create .env.local file under `/do-not-give-up`

```
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
...
FIREBASE_MEASUREMENT_ID=...
```
### Install packages

```zsh
npm i
```

### Start a client

```
npm run dev
```
### Deploy contract with Remix

<img width="342" alt="스크린샷 2023-05-29 오후 10 52 52" src="https://github.com/woooosung/ts_prototype/assets/77828537/216a6c25-0c29-4a32-82ad-0c8596000169">

