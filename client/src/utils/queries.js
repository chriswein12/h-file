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

export const GET_HOME = gql`
    {
        home {
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
`;

export const GET_PRODUCTS = gql`
    {
        products {
            _id
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
        }
    }
`;

export const GET_REMODELS = gql`
    {
        remodels {
            _id
            homeRemodels {
                _id
                remodelTitle
                remodelRoom
                remodelDate
                remodelCost
                remodelDetails
            }
        }
    }
`;

export const GET_SERVICES = gql`
    {
        services {
            _id
            homeServices {
                _id
                serviceTitle
                serviceCost
                serviceFrequency
                serviceDate
                serviceDescription
            }
        }
    }
`;

export const GET_MAINTENANCE = gql`
    {
        maintenance {
            _id
            homeMaintenance {
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