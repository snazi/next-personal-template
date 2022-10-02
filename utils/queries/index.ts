import { gql } from '@apollo/client';

export const GET_ATHLETES_TOP = gql`
  query GetAthletes($args: GetAthletesArgs) {
    getAthletes(args: $args) {
      id
      apiId
      firstName
      lastName
      position
      jersey
      salary
      isActive
      isInjured
      nftImage
      nftAnimation
    }
  }
`;

export const GET_ATHLETE_BY_ID = gql`
  query GetAthleteData($getAthleteById: Float!) {
    getAthleteById(id: $getAthleteById) {
      nftAnimation
      nftImage
      stats {
        fantasyScore
      }
    }
  }
`;

export const GET_ATHLETEDATA_QB = gql`
  query GetAthleteData_QB($getAthleteById: Float!) {
    getAthleteById(id: $getAthleteById) {
      id
      firstName
      lastName
      position
      nftImage
      stats {
        completion
        passingYards
        passingTouchdowns
        interceptions
        carries
        rushingYards
        rushingTouchdowns
      }
    }
  }
`;

export const GET_ATHLETEDATA_RB = gql`
  query GetAthleteData_RB($getAthleteByIdId: Float!) {
    getAthleteById(id: $getAthleteByIdId) {
      id
      firstName
      lastName
      position
      nftImage
      stats {
        carries
        rushingYards
        rushingTouchdowns
        targets
        receptions
        receivingYards
        receivingTouchdowns
      }
    }
  }
`;

export const GET_ATHLETEDATA_WR = gql`
  query GetAthleteData_WR($getAthleteByIdId: Float!) {
    getAthleteById(id: $getAthleteByIdId) {
      id
      firstName
      lastName
      position
      nftImage
      stats {
        targets
        receptions
        receivingYards
        receivingTouchdowns
      }
    }
  }
`;

export const GET_ATHLETEDATA_TE = gql`
  query GetAthleteData_TE($getAthleteByIdId: Float!) {
    getAthleteById(id: $getAthleteByIdId) {
      id
      firstName
      lastName
      position
      nftImage
      stats {
        targets
        receptions
        receivingYards
        receivingTouchdowns
      }
    }
  }
`;
