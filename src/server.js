const { ApolloServer, gql } = require("apollo-server");

// GraphQlスキーマ定義
const typeDefs = gql`
  type Query {
    info: String!
  }
`;

// リゾルバ関数
const resolvers = {
  Query: {
    info: () => "Newsクローン",
  },
};

// ApolloServerをインスタンス化し使用する
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`${url}でサーバ起動中`));