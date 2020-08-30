import { Observable, BehaviorSubject } from 'rxjs';

export class Store<Any>{
    state$ : Observable<Any>;
    private _state: BehaviorSubject<Any>;

    protected constructor(initialState: Any){
        this._state = new BehaviorSubject<Any>(initialState);
        this.state$ = this._state.asObservable();
    }

    get state(){
        return this._state.getValue();
    }

    protected setState(nexState : Any): void{
        this._state.next(nexState);
    }
}