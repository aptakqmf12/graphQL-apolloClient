import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`;

export const GET_LOCATION_BY_ID = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      description
    }
  }
`;

export const GET_LAST_REVIEWS = gql`
  query LatestReviews {
    latestReviews {
      comment
      rating
    }
  }
`;
