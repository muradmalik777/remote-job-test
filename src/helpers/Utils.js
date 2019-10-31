export const applyFilter = (jobs, profile) => {
    let can = []
    let cannot = []
    
    jobs.forEach(item => {
        if(matchRequired(profile.profile, item.compulsary_requirements)){
            if(matchOptional(profile.profile, item.optional_requirements)){
                can.push(item)
            } else {
                cannot.push(item)
            }
        } else {
            cannot.push(item)
        }
    })
    return{
        can: can,
        cannot: cannot
    }
}

const matchRequired = (profile, required) => {
    if(required.length > 0){
        let check = required.every(v => profile.includes(v))
        return check
    } else {
        return true;
    }
}

const matchOptional = (profile, optional) => {
    if(optional.length > 0){
        profile.forEach(item => {
            if(optional.includes(item)){
                console.log(true)
                return true
            }
        })
        return false
    } else {
        return true;
    }
}