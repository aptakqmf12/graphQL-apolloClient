import axios from 'axios';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const Client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

// Client.query({
//   query: gql`
//     query GetLocations {
//       locations {
//         id
//         name
//         description
//       }
//     }
//   `,
// }).then((res) => console.log('res:', res));
