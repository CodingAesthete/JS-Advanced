function solve(array) {
    const createVehicle = () => {
        const vehicles = {};
        return {
            create: (name, inherit, parentname) => {
                vehicles[name] = inherit ? Object.create(vehicles[parentname]) : {}
            },
            set: (name, key, value) => (vehicles[name][key] = value),
            print: (name) => {
                let logs = [];
                for (const key in vehicles[name]) {
                    logs.push(`${key}:${vehicles[name][key]}`);
                }
                console.log(logs.join(", "));
            }
        }
    }
    const action = createVehicle();
    array.map((el) => el.split(" ")).forEach(([cmnd, ...args]) => action[cmnd].apply(null, args));
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])