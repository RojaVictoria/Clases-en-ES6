class Cliente {
    constructor(nombre, impuesto) {
        if (typeof nombre !== "string") {
            console.warn(
              "se supone que nombre debiese ser un texto para la persona "
            );
        };
      
        if (!(impuesto instanceof Impuestos)) {
            console.warn(
              "se supone que impuesto es de tipo Impuesto para la persona " + nombre
            );
        };

        this._nombre = nombre;
        this._impuesto = impuesto;
    }
  
    get nombre() {
        return this._nombre;
    }
  
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
  
    calcularImpuesto() {
        return (
            (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21
      );
    }
}

class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
      this._monto_bruto_anual = monto_bruto_anual;
      this._deducciones = deducciones;
    }
  
    get monto_bruto_anual() {
      return this._monto_bruto_anual;
    }
  
    set monto_bruto_anual(value) {
      this._monto_bruto_anual = value;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(value) {
      this._deducciones = value;
    }
}

const impuestosCliente1 = new Impuestos(5000, 500);
const cliente1 = new Cliente("Bruno", impuestosCliente1);

const impuestosCliente2 = new Impuestos(8000, 200);
const cliente2 = new Cliente("Alicia", impuestosCliente2);

const calculoCliente1 = cliente1.calcularImpuesto();
const calculoCliente2 = cliente2.calcularImpuesto();

console.log({ calculoCliente1, calculoCliente2 });