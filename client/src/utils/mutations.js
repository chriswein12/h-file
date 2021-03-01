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
                homeName
                username
                street
                city
                state
                zip
                yearBought
                yearBuilt
                squareFootage
                value
                lotSize
        }
    }
`;

export const ADD_PRODUCT = gql`
mutation addProduct($homeId: ID!, $productData: ProductInput!) {
    addProduct(homeId: $homeId, productData: $productData) {
            _id
            homeName
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

export const ADD_REMODEL = gql`
mutation addRemodel($homeId: ID!, $remodelData: RemodelInput!) {
    addRemodel(homeId: $homeId, remodelData: $remodelData) {
            _id
            homeName
            homeRemodels {
                _id
                remodelTitle
                remodelRoom
                remodelStartDate
                remodelEndDate
                remodelCost
                remodelDetails
            }
        }
    }
`;

export const ADD_SERVICE = gql`
mutation addService($homeId: ID!, $serviceData: ServiceInput!) {
    addService(homeId: $homeId, serviceData: $serviceData) {
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

export const ADD_MAINTENANCE = gql`
mutation addMaintenance($homeId: ID!, $maintenanceData: MaintenanceInput!) {
    addMaintenance(homeId: $homeId, maintenanceData: $maintenanceData) {
            _id
                homeName
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

//export const ADD_BUSINESS_CARD

export const REMOVE_HOME = gql`
mutation removeHome($_id: ID!) {
    removeHome(_id: $_id) {
    _id
    homeName
    username
    yearBought
    yearBuilt
    squareFootage
    value
    lotSize
        }
    }
`;

export const REMOVE_SERVICE = gql`
mutation removeService($homeId: ID!, $serviceId: ID!) {
    removeService(homeId: $homeId, serviceId: $serviceId) {
        homeName
            homeServices {
                _id
            serviceTitle
            serviceCost
            serviceFrequency
            serviceDescription
            }
        }   
    }
`;

export const REMOVE_REMODEL = gql`
mutation removeRemodel($homeId: ID!, $remodelId: ID!) {
    removeRemodel(homeId: $homeId, remodelId: $remodelId) {
        _id
        homeName
        homeRemodels {
            _id
            remodelTitle
            remodelRoom
            remodelStartDate
            remodelEndDate
            remodelCost
            remodelDetails
        }
    }
}
`;

export const REMOVE_PRODUCT = gql`
mutation removeProduct($homeId: ID!, $productId: ID!) {
    removeProduct(homeId: $homeId, productId: $productId) {
            _id
        homeName
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

export const REMOVE_MAINTENANCE = gql`
mutation removeMaintenance($homeId: ID!, $maintenanceId: ID!) {
    removeMaintenance(homeId: $homeId, maintenanceId: $maintenanceId) {
                _id
                homeName
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
