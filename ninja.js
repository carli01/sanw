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

class sensei extends ninja{
    constructor(nombre,salud,velocidad,fuerza){
        super(nombre,salud,velocidad,fuerza);
        this.nombre=nombre;
        this.salud=salud;
        this.salud=200;
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria=10;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
    }

    mostar_Informacion(){
        console.log(`El ninja es ${this.nombre} su salud ${this.salud} su velocidad ${this.velocidad} su fuerza ${this.fuerza} y su sabiduria ${this.sabiduria}`)
    }
}

var kkshi = new sensei("kakashi",)
kkshi.mostar_Informacion();
kkshi.speakWisdom();
kkshi.mostar_Informacion();
