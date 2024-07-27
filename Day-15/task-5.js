function createFunctions() {
    const functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }

    return functions;
}

const funcs = createFunctions();
funcs[0](); 
funcs[1]();
funcs[2](); 
funcs[3](); 
funcs[4]();
