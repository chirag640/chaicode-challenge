function throwError() {
    throw new Error("Intentional Error");
}

try {
    throwError();
} catch (error) {
    console.log("Caught an error:", error.message);
}
