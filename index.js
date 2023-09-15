const findMatching = (driversArray,passedName) =>{
    const matching = driversArray.filter((person) => {
        return (person.toLowerCase() === passedName.toLowerCase())
    })
    return matching
}

const fuzzyMatch = (driversArray,passedName) =>{
    const matching = driversArray.filter((person)=>{
        const len = passedName.length
        return(person.substring(0,len).toLowerCase() === passedName.toLowerCase())
    })
    return matching
}

const matchName = (driversArray,passedName) =>{
    const matching = driversArray.filter((person)=>{
        if(person.name.toLowerCase() === passedName.toLowerCase()){
            return person
        }
    })
    return matching
}