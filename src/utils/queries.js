import { gql } from 'apollo-boost';

export const GET_LATEST_MINER_VALUES = gql`
  query request($requestId: String!) {
    minerValues(first: 6, orderBy: timestamp, orderDirection: desc) {
      id
      miningEventId
      currentChallenge
      miner
      value
    }
    request(id: $requestId) {
      id
      timestamp
      sender
      query
      querySymbol
      totalTips
      requestId
      requestSymbol @client
    }
  }
`;

const eventFields = `
  id
  timestamp
  requestId
  time
  minedValue
  totalTips
  requestSymbol @client
  status @client
  inDisputeWindow @client
  granPrice @client
  request {
    id
    querySymbol
    granularity
  }
  minerValues {
    id
    miner
    value
  }
`;

export const GET_LATEST_EVENTS = gql`
  query {
    miningEvents(first: 6, orderBy: timestamp, orderDirection: desc) {
      ${eventFields}
    }
  }
`;

export const GET_ALL_EVENTS = gql`
  query {
    miningEvents(first: 50, orderBy: timestamp, orderDirection: desc) {
      ${eventFields}
    }
  }
`;

const disputeFields = `
  id
  timestamp
  reportedMiner
  miner
  result
  reportingParty
  active
  requestId
  disputeId
  relatedMiningEventData
  tally
  result
  disputeVotePassed
  value @client
  requestSymbol @client
  status @client
  inVoteWindow @client
  votes {
    id
    position
    voter
    timestamp
  }
  request {
    granularity
  }
`;

export const GET_LATEST_DISPUTES = gql`
  query {
    disputes(first: 3, orderBy: timestamp, orderDirection: desc) {
      ${disputeFields}
    }
  }
`;

export const GET_ALL_DISPUTES = gql`
  query {
    disputes(first: 100, orderBy: timestamp, orderDirection: desc) {
      ${disputeFields}
    }
  }
`;
