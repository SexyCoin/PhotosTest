import { action, computed, makeObservable, observable } from "mobx";

class photoData{
    dataPhoto = {}
    
    constructor(){
        makeObservable(this,{
            dataPhoto: observable,
            addDataPhoto: action,
            data: computed
        })    
    }

    addDataPhoto(date){
        this.dataPhoto = date
    }

    get data(){
        return this.dataPhoto
    }
}
export const dataPhotoStore = new photoData();