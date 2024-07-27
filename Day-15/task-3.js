function createIdGenerator() {
    let lastId = 0;

    return function() {
        lastId++;
        return lastId;
    };
}

const generateId = createIdGenerator();
console.log(generateId()); 
console.log(generateId()); 
