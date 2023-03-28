export default{
    data(){
        return{
            mensaje : 'lectura de dato',
            frutas : [
                {nombre:'pera'},
                {nombre:'mango'},
                {nombre:'manzana'},
                
                
            ],
            nuevafruta:'',
            frutacomienzo:''
            }


                },
                methods :{
                    agregarfruta(){
                        this.frutas.push({nombre:this.nuevafruta});
                        this.nuevafruta='',
                        console.log(this.frutas)

                    },
                    agregarinicio(){

                        this.frutas.unshift({nombre:this.frutacomienzo});
                        this.frutacomienzo=''
                    },
                        eliminarprimero(){
                            this.frutas.shift()
                        },
                        eliminarultimo(){
                        this.frutas.pop()
                    },
                    eliminar(dd){
                        this.frutas.splice(dd,1);
                    },
                    todoeliminar(){
                        this.frutas=[]
                    }
                    

                    
            }
            

        }
