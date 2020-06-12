import { people, getById, addPeople, addToUsers, showAllUsers } from './db';

const nicolas = {
	name: 'Amvient',
	age: 13,
	gender: 'male',
};
const books = [
	{
		title: 'Harray',
		author: 'Rowling',
	},
	{
		title: 'Jurassic park',
		author: 'Crichton',
	},
];
const resolvers = {
	Query: {
		people: () => people,
		person: (_: any, { id }: any) => getById(id),
		books: () => books,
		hello: (_: any, { name }: any) => `Hello ${name || 'world'}`,
		showAllUsers: () => showAllUsers(),
	},
	Mutation: {
		//주의.. 함수를 {}로 감싸면 안된다. 전혀 다른 의미가 됨.
		addPeople: (_: any, { name, age, gender }: any) => addPeople(name, age, gender),
		addUser: (_: any, { email, name, passwd }: any) => addToUsers(email, name, passwd),
	},
};

export default resolvers;
