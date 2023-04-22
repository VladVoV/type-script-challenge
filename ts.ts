const container = document.querySelector('.container');
const firstTaskButton = document.querySelector('.button-1-task');
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const fetchData = async ():Promise<Post[] | string> => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json() as Post[];
        for(const post of posts){
            const postNode = document.createElement('div');
            postNode.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `
            container?.appendChild(postNode);
        }
        return posts;
    } catch (error: unknown) {
        if (error instanceof Error) {
            return error.message;
        }
        return "Something went wrong, please try again later"
    }
}

function updateObjectInArray<ObjectShape>(
    initialArray: ObjectShape[],
    key: keyof ObjectShape,
    value: ObjectShape[keyof ObjectShape],
    patch: Partial<ObjectShape>
):ObjectShape[]{
    const newArray = [...initialArray];
    const index = newArray.findIndex((obj) => obj[key] === value);
    if (index === -1) {
        return newArray;
    }
    const updatedObject = {
        ...newArray[index],
        ...patch,
    };
    newArray[index] = updatedObject;
    return newArray;
}
interface Person {
    id: number;
    name: string;
    age: number;
}
const people: Person[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

const updatedPeople = updateObjectInArray<Person>(people, 'id', 2,
    {
        age: 31,
        name: 'Alex'
    }
);
console.log(updatedPeople);

firstTaskButton?.addEventListener('click', fetchData);

