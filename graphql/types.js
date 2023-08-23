const { 
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLFloat,
    GraphQLError,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString,
    

} = require("graphql")
const { users } = require("../data")

const UserType = new GraphQLObjectType({
    name : "users",
    description : 'it represent a single user',
    fields : () => ({
        id  : {
            type : new GraphQLNonNull( GraphQLID),
            
        },
        firstName :{
            type :new GraphQLNonNull(GraphQLString)
        },
        lastName :{
            type :new GraphQLNonNull(GraphQLString)
        }
    })
})
// Root Query Type
const RootQueryType = new  GraphQLObjectType({
    name : 'Query',
    description : 'Root Query',
    fields : ()=>({
        users : {
            type : new GraphQLList(new GraphQLNonNull(UserType)),
            resolve : ()=>{
                return users
            }
        }
    })
    
})
module.exports = {
    UserType,RootQueryType
}