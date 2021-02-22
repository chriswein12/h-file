const { gql } = require('apollo-server-express');

//type Home: reference _id as homeId?
const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        savedHomes: [Home]
    }

    type Home: {
        _id: ID!
        homeName: String!
        address: String!
        yearBought: Int
        yearBuilt: Int
        squareFootage: Int
        value: Int
        lotSize: Int
        homeServices: [Services]
        homeRemodels: [Remodel]
        homeProducts: [Product]
        homeMaintenances: [Maintenance]
    }

    type Services: {
        _id: ID!
        serviceTitle: String!
        serviceCost: Int!
        serviceFrequency: String
        serviceDate: String!
        serviceDescription: String
        serviceContact: [BusinessCard]
    }

    type Remodel: {
        _id: ID!
        remodelTitle: String!
        remodelRoom: String!
        remodelDate: String!
        remodelCost: Int
        remodelDetails: String
        remodelContacts: [BusinessCard]
    }

    type Product: {
        _id: ID!
        productName: String!
        productPrice: Int!
        datePurchased: String!
        productRoom: String
        serialNumber: String
        modelNumber: String
        warrantyLength: String
        productLink: String
        productDetails: String
    }

    type Maintenance: {
        _id: ID!
        maintName: String!
        maintCost: Int!
        nextMaintDate: String!
        maintFrequency: String!
        pastMaintDates: [String]
        maintDetails: String
    }

    input HomeInput: {
        homeName: String
        address: String
        yearBought: Int
        yearBuilt: Int
        squareFootage: Int
        value: Int
        lotSize: Int
    }

    input ServiceInput: {
        serviceTitle: String
        serviceCost: Int
        serviceFrequency: String
        serviceDate: String
        serviceDescription: String
        serviceContact: [BusinessCard]
    }

    input RemodelInput: {
        remodelTitle: String
        remodelRoom: String
        remodelDate: String
        remodelCost: Int
        remodelDetails: String
        remodelContacts: [BusinessCard]
    }

    input ProductInput: {
        productName: String
        productPrice: Int
        datePurchased: String
        productRoom: String
        serialNumber: String
        modelNumber: String
        warrantyLength: String
        productLink: String
        productDetails: String
    }

    input MaintenanceInput: {
        maintName: String
        maintCost: Int
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
        addService(serviceData: ServiceInput!): Service
        addRemodel(remodelData: RemodelInput!): Remodel
        addProduct(productData: ProductInput!): Product
        addMaintenance(maintenanceData: MaintenanceInput!): Maintenance
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;