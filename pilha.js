class Pilha {
    constructor(){
        this.count = 0
        this.item ={}
    }
    metodo(){
        if (this.isEmpty()){
            return undefined
        }
        this.count--
        const result = this.item[this.count]
        delete this.item[this.count]
        return result
    }
}