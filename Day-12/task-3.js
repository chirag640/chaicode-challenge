try {
    console.log("In the try block");
    throw new Error("Error in try block");
} catch (error) {
    console.log("In the catch block:", error.message);
} finally {
    console.log("In the finally block");
}
