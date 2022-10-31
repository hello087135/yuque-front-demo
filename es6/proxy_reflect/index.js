let person ={
    name: 'Max',
    age:18
}

const proxy = new Proxy(person, {
    get(target, prop,receiver){
        console.log('Getting value')
        return Reflect.get(target, prop, receiver)
    }
})
console.log(proxy.name)
console.log(proxy.age)