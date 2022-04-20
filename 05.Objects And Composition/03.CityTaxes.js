function createAssemblyLine(name, population, treasury) {
    let town={
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury+=this.population*this.taxRate;
        },
        applyGrowth(percentage){
            this.population+=percentage/100*this.population;
        },
        applyRecession(percentage){
            this.treasury-=percentage/100*this.treasury;
        }
    }
    return town;
}