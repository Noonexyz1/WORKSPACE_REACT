export class UserName {
    value: String;

    constructor(value: String){
        this.value = value;
        this.ensureIsValid();
    }

    //Mi regla de negocio es por ejemplo que todos los nombres sean mayor a tres caracteres
    private ensureIsValid(){
        if(this.value.length < 3) {
            throw new Error("UserName must be at least 3 characteres as long");
        }
    }

}