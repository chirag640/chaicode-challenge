class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    return input;
}

try {
    console.log(validateInput("Valid input"));
    console.log(validateInput(""));
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
