function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    
    let localStorageValue = localStorage.getItem(key);
    let sessionStorageValue = sessionStorage.getItem(key);
    
    console.log(`LocalStorage: ${localStorageValue}, SessionStorage: ${sessionStorageValue}`);
}

saveToBothStorages('myKey', 'This is a test value');
// Output: LocalStorage: This is a test value, SessionStorage: This is a test value
