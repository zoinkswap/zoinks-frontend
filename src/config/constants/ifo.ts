import { Token, ChainId } from '@zoinks-swap/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = [
  {
    id: 'dpt',
    address: '0x63914805A0864e9557eA3A5cC86cc1BA054ec64b',
    isActive: true,
    name: 'Diviner Protocol (DPT)',
    poolBasic: {
      saleAmount: '7,200,000 DPT',
      raiseAmount: '$180,000',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '16,800,000 DPT',
      raiseAmount: '$420,000',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: tokens.cake,
    token: tokens.dpt,
    releaseBlockNumber: 13491500,
    campaignId: '511160000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmQqpknHvuQwshVP259qFxfQsxiWbQ9SLMebohDeRwRzKg',
    tokenOfferingPrice: 0.025,
    version: 3,
  },
  {
    id: 'santos',
    address: '0x69B5D2Ab0cf532a0E22Fc0dEB0c5135639892468',
    isActive: false,
    name: 'FC Santos Fan Token (SANTOS)',
    poolBasic: {
      saleAmount: '120,000 SANTOS',
      raiseAmount: '$300,000',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '280,000 SANTOS',
      raiseAmount: '$700,000',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: tokens.cake,
    token: tokens.santos,
    releaseBlockNumber: 13097777,
    campaignId: '511150000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmUqRxjwZCWeZWEdgV2vHJ6hex7jMW7i247NKFas73xc8j',
    tokenOfferingPrice: 2.5,
    version: 2,
  },
  {
    id: 'porto',
    address: '0xFDFf29dD0b4DD49Bf5E991A30b8593eaA34B4580',
    isActive: false,
    name: 'FC Porto Fan Token (PORTO)',
    poolBasic: {
      saleAmount: '250,000 PORTO',
      raiseAmount: '$500,000',
      cakeToBurn: '$0',
      distributionRatio: 0.5,
    },
    poolUnlimited: {
      saleAmount: '250,000 PORTO',
      raiseAmount: '$500,000',
      cakeToBurn: '$0',
      distributionRatio: 0.5,
    },
    currency: tokens.cake,
    token: tokens.porto,
    releaseBlockNumber: 12687500,
    campaignId: '511140000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmaakXYpydAwCgTuSPe3R2ZNraRtkCbK6iBRqBCCdzqKEG',
    tokenOfferingPrice: 2,
    version: 2,
  },
  {
    id: 'dar',
    address: '0xb6eF1f36220397c434A6B15dc5EA616CFFDF58CE',
    isActive: false,
    name: 'Mines of Dalarnia (DAR)',
    poolBasic: {
      saleAmount: '6,000,000 DAR',
      raiseAmount: '$450,000',
      cakeToBurn: '$0',
      distributionRatio: 0.5,
    },
    poolUnlimited: {
      saleAmount: '6,000,000 DAR',
      raiseAmount: '$450,000',
      cakeToBurn: '$0',
      distributionRatio: 0.5,
    },
    currency: tokens.cake,
    token: tokens.dar,
    releaseBlockNumber: 12335455,
    campaignId: '511130000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmeJenHcbY45eQxLRebzvpNk5qSCrj2wM1t4EAMHotFoJL',
    tokenOfferingPrice: 0.075,
    version: 2,
  },
  {
    id: 'dkt',
    address: '0x89ab9852155A794e371095d863aEAa2DF198067C',
    isActive: false,
    name: 'Duelist King (DKT)',
    poolBasic: {
      saleAmount: '75,000 DKT',
      raiseAmount: '$131,250',
      cakeToBurn: '$65,625',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '175,000 DKT',
      raiseAmount: '$306,250',
      cakeToBurn: '$153,125',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.dkt,
    releaseBlockNumber: 12130750,
    campaignId: '511120000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmTRWdW9a65fAkyJy1wrAJRU548fNMAZhRUDrSxzMDLmwk',
    tokenOfferingPrice: 1.75,
    version: 2,
  },
  {
    id: 'kalmar',
    address: '0x1aFB32b76696CdF05593Ca3f3957AEFB23a220FB',
    isActive: false,
    name: 'Kalmar (KALM)',
    poolBasic: {
      saleAmount: '375,000 KALM',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '875,000 KALM',
      raiseAmount: '$2,500,000',
      cakeToBurn: '$1,250,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.kalm,
    releaseBlockNumber: 7707736,
    campaignId: '511110000',
    articleUrl: 'https://pancakeswap.medium.com/kalmar-kalm-ifo-to-be-hosted-on-pancakeswap-4540059753e4',
    tokenOfferingPrice: 2.0,
    version: 2,
  },
  {
    id: 'hotcross',
    address: '0xb664cdbe385656F8c54031c0CB12Cea55b584b63',
    isActive: false,
    name: 'Hot Cross (HOTCROSS)',
    poolBasic: {
      saleAmount: '15,000,000 HOTCROSS',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '35,000,000 HOTCROSS',
      raiseAmount: '$1,750,000',
      cakeToBurn: '$875,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.hotcross,
    releaseBlockNumber: 7477900,
    campaignId: '511100000',
    articleUrl: 'https://pancakeswap.medium.com/hot-cross-hotcross-ifo-to-be-hosted-on-pancakeswap-10e70f1f6841',
    tokenOfferingPrice: 0.05,
    version: 2,
  },
  {
    id: 'horizon',
    address: '0x6137B571f7F1E44839ae10310a08be86D1A4D03B',
    isActive: false,
    name: 'Horizon Protocol (HZN)',
    poolBasic: {
      saleAmount: '3,000,000 HZN',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '7,000,000 HZN',
      raiseAmount: '$1,750,000',
      cakeToBurn: '$875,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.hzn,
    releaseBlockNumber: 6581111,
    campaignId: '511090000',
    articleUrl: 'https://pancakeswap.medium.com/horizon-protocol-hzn-ifo-to-be-hosted-on-pancakeswap-51f79601c9d8',
    tokenOfferingPrice: 0.25,
    version: 2,
  },
  {
    id: 'belt',
    address: '0xc9FBedC033a1c479a6AD451ffE463025E92a1d38',
    isActive: false,
    name: 'Belt (BELT)',
    poolUnlimited: {
      saleAmount: '150,000 BELT',
      raiseAmount: '$3,000,000',
      cakeToBurn: '$1,500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.belt,
    releaseBlockNumber: 5493919,
    campaignId: '511080000',
    articleUrl: 'https://pancakeswap.medium.com/belt-fi-belt-ifo-to-be-hosted-on-pancakeswap-353585117e32',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'watch',
    address: '0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d',
    isActive: false,
    name: 'Yieldwatch (WATCH)',
    poolUnlimited: {
      saleAmount: '8,000,000 WATCH',
      raiseAmount: '$800,000',
      cakeToBurn: '$400,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.watch,
    releaseBlockNumber: 5294924,
    campaignId: '511070000',
    articleUrl: 'https://pancakeswap.medium.com/yieldwatch-watch-ifo-to-be-hosted-on-pancakeswap-d24301f17241',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'berry',
    address: '0x5d028cE3435B2bB9AceBfaC599EEbA1ccD63d7dd',
    isActive: false,
    name: 'Berry (BRY)',
    poolUnlimited: {
      saleAmount: '2,000,000 BRY',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.bry,
    releaseBlockNumber: 4750968,
    campaignId: '511060000',
    articleUrl: 'https://pancakeswap.medium.com/berry-bry-ifo-to-be-hosted-on-pancakeswap-b4f9095e9cdb',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'soteria',
    address: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
    isActive: false,
    name: 'Soteria (wSOTE)',
    poolUnlimited: {
      saleAmount: '1,500,000 wSOTE',
      raiseAmount: '$525,000',
      cakeToBurn: '$262,500',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.wsote,
    releaseBlockNumber: 4086064,
    campaignId: '511050000',
    articleUrl: 'https://pancakeswap.medium.com/soteria-sota-ifo-to-be-hosted-on-pancakeswap-64b727c272ae',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'helmet',
    address: '0xa32509d760ee47Eb2Be96D338b5d69B5FBa4eFEB',
    isActive: false,
    name: 'Helmet.insure (Helmet)',
    poolUnlimited: {
      saleAmount: '10,000,000 Helmet',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.helmet,
    releaseBlockNumber: 3771926,
    campaignId: '511040000',
    articleUrl: 'https://pancakeswap.medium.com/1-000-000-helmet-helmet-ifo-to-be-hosted-on-pancakeswap-3379a2a89a67',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'tenet',
    address: '0xB922aA19A2603A07C6C9ED6c236618C9bac51f06',
    isActive: false,
    name: 'Tenet (TEN)',
    poolUnlimited: {
      saleAmount: '1,000,000 TEN',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.ten,
    releaseBlockNumber: 3483883,
    campaignId: '511030000',
    articleUrl: 'https://pancakeswap.medium.com/tenet-ten-ifo-to-be-hosted-on-pancakeswap-b7e1eb4cb272',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'ditto',
    address: '0x570c9eB19553526Fb35895a531928E19C7D20788',
    isActive: false,
    name: 'Ditto (DITTO)',
    poolUnlimited: {
      saleAmount: '700,000 DITTO',
      raiseAmount: '$630,000',
      cakeToBurn: '$315,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.ditto,
    releaseBlockNumber: 3279767,
    campaignId: '511020000',
    articleUrl: 'https://pancakeswap.medium.com/ditto-money-ditto-ifo-to-be-hosted-on-pancakeswap-342da3059a66',
    tokenOfferingPrice: null,
    version: 1,
  },
  {
    id: 'blink',
    address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
    isActive: false,
    name: 'BLINk (BLK)',
    poolUnlimited: {
      saleAmount: '100,000,000 BLINK',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.blink,
    releaseBlockNumber: 3279767,
    campaignId: '511010000',
    articleUrl: 'https://medium.com/pancakeswap/1-000-000-ifo-blink-joins-pancakeswap-15841800bdd8',
    tokenOfferingPrice: null,
    version: 1,
  },
]

export default ifos
