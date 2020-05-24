class Storage{
    constructor(arr){
       this.items = arr;
    };

    getItems(){
        return this.items;
    }

    addItem(item){
        this.items.push(item);
        return this.items;
    }

    removeItem(item){
        if(this.items.includes(item)){
            const indexItem = this.items.indexOf(item);
            this.items.splice(indexItem, 1);
        }
        return this.items;
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]