import gql from 'graphql-tag';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedHomes {
                _id
                homeName
                address
                yearBought
                yearBuilt
                squareFootage
                value
                lotSize
            }
        }
    }
`;

export const GET_HOMES = gql`
    {
        homes {
            
        }
    }
`;