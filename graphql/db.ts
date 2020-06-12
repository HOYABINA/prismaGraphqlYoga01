import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export let people = [
	{
		id: '1',
		name: 'AAA',
		age: 99,
		gender: 'female',
	},
	{
		id: '2',
		name: 'BBB',
		age: 88,
		gender: 'female',
	},
	{
		id: '3',
		name: 'CCC',
		age: 73,
		gender: 'male',
	},
	{
		id: '4',
		name: 'DDD',
		age: 12,
		gender: 'male',
	},
	{
		id: '5',
		name: 'EEEEE',
		age: 27,
		gender: 'female',
	},
	{
		id: '6',
		name: 'WWS',
		age: 34,
		gender: 'female',
	},
];

export function getById(id: number) {
	const filteredPeople = people.filter(each => String(id) === each.id);
	if (filteredPeople.length) {
		return filteredPeople[0];
	} else {
		return {
			id: '0',
			name: 'No one',
			age: -1,
			gender: 'female',
		};
	}
	return 'No one';
}

export function addPeople(name: string, age: number, gender: string) {
	const person = {
		id: `${people.length + 10}`,
		name: name,
		age: age,
		gender: gender,
	};
	people.push(person);
	return person;
}

// export function addToUsers() {}
export async function addToUsers(email: string, name: string, passwd: string) {
	const user = await prisma.users.create({
		data: {
			name: name,
			password: passwd,
			useremail: email,
		},
	});
	// const userOne = prisma.users.findOne({
	// 	where: {
	// 		name: 'amvient',
	// 	},
	// });

	// const user = {
	// 	id: id,
	// 	name: name,
	// 	password: passwd,
	// 	useremail: email,
	// };
	return user;
}

export async function showAllUsers() {
	const allUsers = await prisma.users.findMany();
	console.log(allUsers);

	return allUsers;
}
