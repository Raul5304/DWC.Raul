class Rectangulo{
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(){
        return this.ancho * this.alto;
    }

    calcularPerimetro(){
        return 2 * (this.ancho + this.alto);
    }

    esChico(){
        const area = this.calcularArea();
        return area < 100;
    }

    escalar(factor){
        this.ancho *= factor;
        this.alto *= factor;
        console.log(`Escalado por ${factor}. Nuevas dimensiones ${this.ancho}x${this.alto}`);
    }

    compararCon(otroRectangulo){
        const areaPropia = this.calcularArea();
        const areaOtra = otroRectangulo.calcularArea();

        if (areaPropia > areaOtra){
            return "Este rectángulo es más grande";
        } else if (areaPropia < areaOtra){
            return "El otro rectángulo es más grande";
        } else{
            return "Ambos rectángulos son iguales";
        }
    }
}