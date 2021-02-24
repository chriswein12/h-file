import gql from 'graphql-tag';

//see typeDefs for mutations
//Auth is being built out, may have to revisit

//type Auth exists, include token
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
               }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_HOME = gql`
    mutation addHome($homeData: HomeInput!) {
        addHome(homeData: $homeData) {
            _id
            username
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

export const ADD_PRODUCT = gql`
    mutation addProduct($productData: ProductInput!) {
        addProduct(productData: $productData) {
            _id
            homeName
            homeProducts {
                _id
                productName
                productPrice
                datePurchase
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

export const ADD_REMODEL = gql`
    mutation addRemodel($remodelData: RemodelInput!) {
        addRemodel(remodelData: $remodelData) {
            _id
            homeName
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
export const ADD_SERVICE = gql`
    mutation addService($serviceData: ServiceInput!) {
        addService(serviceData: $serviceData) {
            _id
            homeName
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

//export const ADD_MAINTENANCE
//export const ADD_BUSINESS_CARD