export class UserId {
    value: String;

    constructor(value: String){
        this.value = value;
        this.ensureIsValid();
    }

    //Mi regla de negocio es por ejemplo que todos los ID tenga cinco caracteres menos
    private ensureIsValid(){
        if(this.value.length < 5) {
            throw new Error("UserID must be at least 5 characteres as long");
        }
    }

}