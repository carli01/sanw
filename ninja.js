class ninja{
    constructor(nombre,salud){
      this.nombre=nombre;
      this.salud=salud;
      this.velocidad=3;
      this.fuerza=3;
    }
    sayName(){
        console.log(this.nombre);

    }
    showStats(){
        console.log(this.nombre, this.salud, this.velocidad, this.fuerza);
    }
    drinkSake(){
          this.fuerza += 10;
    }

}