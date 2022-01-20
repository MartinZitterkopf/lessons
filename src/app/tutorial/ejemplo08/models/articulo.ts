export class Articulo {
    public codigo: number;
    public descripcion: string;
    public precio: number;

    constructor(codigo: number, descripcion: string, precio: number) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    
}