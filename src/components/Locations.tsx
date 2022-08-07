import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  GET_LOCATIONS,
  GET_LOCATION_BY_ID,
  GET_LAST_REVIEWS,
} from '../api/query';
import { EDIT_REVIEW } from '../api/mutation';
import { Location, Review } from '../types';

type LocationsResponse = {
  locations: Location[];
};
type LocationResponse = {
  location: Location;
};
type ReviewResponse = {
  latestReviews: Review[];
};
type ReviewMutationRequest = {
  comment: string;
  locationId: string;
  rating?: number;
};

const Locations = () => {
  const { data: locations, loading: locationsLoading } =
    useQuery<LocationsResponse>(GET_LOCATIONS);

  const { data: location, loading: locationLoading } =
    useQuery<LocationResponse>(GET_LOCATION_BY_ID, {
      variables: {
        id: 'loc-1',
      },
    });

  const { data: reviews, loading: reviewsLoading } =
    useQuery<ReviewResponse>(GET_LAST_REVIEWS);

  const Loading = ({ loading }: { loading: boolean }) => {
    return loading ? <div>Loading...</div> : null;
  };

  const [editReview, { data: mutatedReview, loading }] = useMutation<any>(
    EDIT_REVIEW,
    {
      variables: {
        locationReview: { comment: 'comment', rationg: 1, locationId: 'loc-1' },
      },
    }
  );

  return (
    <>
      <h3>Locations</h3>
      <Loading loading={locationsLoading} />
      {locations?.locations?.map((location, index) => {
        return (
          <div key={location.id}>
            {index + 1}. {location.name}
          </div>
        );
      })}

      <h3>Location</h3>
      <Loading loading={locationLoading} />
      {location?.location.name}

      <h3>Lastest Review</h3>
      <Loading loading={reviewsLoading} />
      {reviews?.latestReviews?.map((review, index) => {
        return (
          <div key={index}>
            {index + 1}. {review.comment}
          </div>
        );
      })}
    </>
  );
};

export default Locations;
