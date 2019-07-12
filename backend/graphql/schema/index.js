const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Url {
    id: ID!
    name: String
    url: String
    visitCounter: Int
    parent: Group
}
type Group {
    id: ID!
    name: String
    url: String
    visitCounter: Int
    childUrls: [Url]
}
input UrlInput {
    name: String
    url: String
    parent: ID
}
input GroupInput {
    name: String
    url: String
}
input IncGroupInput {
    id: ID
}
input AddUrlInGroupInput {
    groupId: ID
    urlId: ID
}

type RootQuery {
    url(id:ID!): Url!
    urls: [Url]
    group(id:ID!): Group!
    groups: [Group!]
    limitedUrls: [Url]
    randomUrl(groupId:ID!): Url
}
type RootMutation {
    createUrl(urlInput: UrlInput): Url!
    createGroup(groupInput: GroupInput): Group!
    incGroupCounter(incGroupInput: IncGroupInput): Group!
    addUrlInGroup(addUrlInGroupInput: AddUrlInGroupInput): Group!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);