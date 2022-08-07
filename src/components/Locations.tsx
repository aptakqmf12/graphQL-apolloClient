import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../api/query';
import { Location, LocationsResponse } from '../types';

const Locations = () => {
  const { data, loading } = useQuery<LocationsResponse>(GET_LOCATIONS);

  return (
    <>
      {loading ? <div>loading...</div> : null}
      {data?.locations?.map((location, index) => {
        return <div key={index}>{location.name}</div>;
      })}
    </>
  );
};

export default Locations;
