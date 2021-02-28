const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        savedHomes: [Home]
    }

    type Home {
        _id: ID!
        homeName: String!
        username: String!
        street: String!
        city: String!
        state: String!
        zip: String!
        yearBought: String
        yearBuilt: String
        squareFootage: String
        value: String
        lotSize: String
        homeServices: [Services]
        homeRemodels: [Remodel]
        homeProducts: [Product]
        homeMaintenances: [Maintenance]
    }

    type Services {
        _id: ID!
        homeId: ID
        serviceTitle: String!
        serviceCost: String!
        serviceFrequency: String
        serviceDate: String
        serviceDescription: String
        serviceContact: [BusinessCard]
    }

    type Remodel {
        _id: ID!
        remodelTitle: String!
        remodelRoom: String!
        remodelStartDate: String!
        remodelEndDate: String
        remodelCost: String
        remodelDetails: String
        remodelContacts: [BusinessCard]
    }

    type Product {
        _id: ID!
        productName: String!
        productPrice: String!
        datePurchased: String!
        productRoom: String
        serialNumber: String
        modelNumber: String
        warrantyLength: String
        productLink: String
        productDetails: String
    }

    type Maintenance {
        _id: ID!
        maintName: String!
        maintCost: String!
        nextMaintDate: String!
        maintFrequency: String!
        pastMaintDates: [String]
        maintDetails: String
    }

    type BusinessCard {
        businessCardId: ID
        businessName: String
        contactName: String
        phone: String        
        email: String        
        website: String
    }

    input HomeInput {
        homeName: String
        street: String
        city: String
        state: String
        zip: String
        yearBought: String
        yearBuilt: String
        squareFootage: String
        value: String
        lotSize: String
    }

    input ServiceInput {
        serviceTitle: String
        serviceCost: String
        serviceFrequency: String
        serviceDate: String
        serviceDescription: String
    }

    input RemodelInput {
        remodelTitle: String
        remodelRoom: String
        remodelStartDate: String
        remodelEndDate: String
        remodelCost: String
        remodelDetails: String
    }

    input BusinessCardInput {
        businessName: String
        contactName: String
        phone: String        
        email: String        
        website: String
    }

    input ProductInput {
        productName: String
        productPrice: String
        datePurchased: String
        productRoom: String
        serialNumber: String
        modelNumber: String
        warrantyLength: String
        productLink: String
        productDetails: String
    }

    input MaintenanceInput {
        maintName: String
        maintCost: String
        nextMaintDate: String
        maintFrequency: String
        pastMaintDates: [String]
        maintDetails: String
    }

    type Query {
        me: User
        home(_id: ID!): Home
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addHome(homeData: HomeInput!): Home
        addService(homeId: ID!, serviceData: ServiceInput!): Home
        addRemodel(homeId: ID!, remodelData: RemodelInput!): Home
        addProduct(homeId: ID!, productData: ProductInput!): Home
        addMaintenance(homeId: ID!, maintenanceData: MaintenanceInput!): Home
        removeHome(_id: ID!): Home
        removeService(homeId: ID!, serviceId: ID!): Home
        removeRemodel(homeId: ID!, remodelId: ID!): Home
        removeProduct(homeId: ID!, productId: ID!): Home
        removeMaintenance(homeId: ID!, maintenanceId: ID!): Home
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;