// Usar const y let en lugar de var
const MAX_USERS = 100;
let currentUserCount = 0;

// Nombres de variables descriptivos
function addUser(user) {
    if (currentUserCount >= MAX_USERS) {
        console.error('No se pueden agregar más usuarios');
        return;
    }
    currentUserCount++;
    console.log(`Usuario ${user.name} agregado. Total de usuarios: ${currentUserCount}`);
}

// Funciones pequeñas y específicas
function isUserValid(user) {
    return user && user.name && user.email;
}

// Uso de plantillas literales
function greetUser(user) {
    console.log(`Hola, ${user.name}!`);
}

// Manejo de errores
try {
    const user = { name: 'Juan', email: 'juan@example.com' };
    if (isUserValid(user)) {
        addUser(user);
        greetUser(user);
    } else {
        console.error('Usuario no válido');
    }
} catch (error) {
    console.error('Ocurrió un error:', error);
}