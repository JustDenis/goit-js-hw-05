class StringBuilder{
    constructor(string){
        this._value = string;
    }

    get value() {
        return this._value;
    }

    append(string){
        const stringArr = this._value.split('');
        stringArr.push(string);       
        return this._value = stringArr.join('');
    }

    prepend(string){
        const stringArr = this._value.split('');
        stringArr.unshift(string);
        return this._value = stringArr.join('');
    }

    pad(string){
        this._value = this.append(string);
        this._value = this.prepend(string);
        return this._value;
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='