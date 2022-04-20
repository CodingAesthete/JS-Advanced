function createSortedList() {
    let obj={
        list: [],
        size:0,
        add(element){
            this.list.push(Number(element));
            this.size=this.list.length;
            this.list=this.list.sort((a,b)=>a-b);
        },
        remove(index){
            if(Number(index)>=0 && Number(index)<this.size){
                this.list.splice(Number(index),1);
                this.size=this.list.length;
            }
        },
        get(index){
            if(Number(index)>=0 && Number(index)<this.size){
                this.size=this.list.length;
                return this.list[index];
            }
        }
    }
    return obj;
}