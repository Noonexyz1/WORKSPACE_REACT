import { Subject } from "rxjs";

export class SubjectAdapter {
    subjet$ = new Subject();

    getObservable(){
        return this.subjet$.asObservable();
    }

    shareDataToObservable(value){
        this.subjet$.next(value);
    }
}