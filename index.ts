import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolver';

console.log('Hello ............................');

const options = {
	port: 4000,
	endpoint: '/graphql',
	subscriptions: '/subscriptions',
	playground: '/playground',
};

const server = new GraphQLServer({
	typeDefs: './graphql/schema.graphql',
	resolvers,
});

server.start(options, () => console.log(`Server ready at localhost:4000`));
