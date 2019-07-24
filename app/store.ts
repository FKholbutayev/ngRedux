import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { State } from './state'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/pluck'
import { Observable } from 'rxjs/Observable';


const state: State = {
    playlist:undefined
}



export class Store {
    private subject = new BehaviorSubject<State>(state); 
    private store = this.subject.asObservable().distinctUntilChanged()

    get value() {
        return this.subject.value
    }

    select<T>(name:string) : Observable<T> {
        return this.store.pluck(name)
    }

    set(name:string, state:any) {
        this.subject.next({
            ...this.value, [name]:state
        })
    }
}
