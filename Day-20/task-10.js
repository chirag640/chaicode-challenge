function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();
    
    console.log(`LocalStorage after clear:`, localStorage);
    console.log(`SessionStorage after clear:`, sessionStorage);
}

clearAllStorages();
// Output: LocalStorage after clear: Storage {}
//         SessionStorage after clear: Storage {}
