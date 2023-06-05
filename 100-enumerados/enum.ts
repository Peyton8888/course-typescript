//por defecto el eny comiensa en 0
enum enu {
    sur = 1,
    norte,
    este,
    oeste,
}
console.log(enu.norte)

//puedes agregarle valores a todos lo enmumerados
enum enu3 {
    sur = 8888,
    norte = 1111,
    este = 4444,
    oeste = 6666,
}
console.log(enu3.norte)

//enumerados con strings
enum enum4 {
    norte = 'Norte',
    sur = 'Sur',
    este = 'Este',
    oeste = 'Oeste',
}
console.log(enum4.este)

