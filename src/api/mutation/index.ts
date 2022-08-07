import { gql } from '@apollo/client';
export const EDIT_MUTATION = gql`
    mutation editLocations(){
        locations() {
            
        }
    }
`;

export const EDIT_REVIEW = gql`
  mutation Mutation($locationReview: LocationReviewInput) {
    submitReview(locationReview: $locationReview) {
      success
      message
    }
  }
`;
