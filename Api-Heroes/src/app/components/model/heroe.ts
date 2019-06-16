// modelo de la base de datos
export class Heroe {
    constructor(_id='', name='', picture='', publisher='', info=''){
        this._id=_id,
        this.name=name,
        this.picture=picture,
        this.publisher=publisher,
        this.info=info
    }
    _id: string;
    name: string;
    picture: string
    publisher:string;
    info:string;
}

