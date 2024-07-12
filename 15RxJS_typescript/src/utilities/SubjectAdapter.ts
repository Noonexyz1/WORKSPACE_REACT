import { Observable, Subject } from "rxjs";

export class SubjectAdapter {
    
    private subject$ = new Subject<any>();

    obtenerObservable(): Observable<any> {
        return this.subject$.asObservable();
    }

    publicarDatos(valor: any): void {
        this.subject$.next(valor);
    }
}