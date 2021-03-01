import gql from 'graphql-tag';

//build out BusinessCard and add to queries

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedHomes {
                _id
                homeName
                street
                city
                state
                zip
            }
        }
    }
`;

export const GET_HOME = gql`
    query home($id: ID!) {
        home(_id: $id) {
            _id
            homeName
            street
            city
            state
            zip
            yearBought
            yearBuilt
            squareFootage
            value
            lotSize
            homeProducts {
                _id
                productName
                productPrice
                datePurchased
                productRoom
                serialNumber
                modelNumber
                warrantyLength
                productLink
                productDetails
            }
            homeRemodels {
                _id
                remodelTitle
                remodelRoom
                remodelStartDate
                remodelEndDate
                remodelCost
                remodelDetails
            }
            homeServices {
                _id
                serviceTitle
                serviceCost
                serviceFrequency
                serviceDate
                serviceDescription
            }
            homeMaintenances {
                _id
                maintName
                maintCost
                nextMaintDate
                maintFrequency
                pastMaintDates
                maintDetails
            }
        }
    }
`;