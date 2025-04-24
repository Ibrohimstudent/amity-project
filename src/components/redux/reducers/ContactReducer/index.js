function ContactReducer(state={
    contacts:[
        {id:1,email:"john.doe@gamil.com", phone:"987-827-0606", address:"54 Revenue St.", twitter:"https://twitter.com/johndoe"},
    
    ],
    editData:""
},action){
    switch (action.type) {
        case "ADD_CONTACT" :
            let contacts= [...state.contacts]

            contacts.push({
                id:state.contacts.length+1,
                email: action.payload.email,
                phone:action.payload.phone,
                address: action.payload.address,
                twitter:action.payload.twitter

            })

            state = {...state,contacts: contacts}
            break
        case "DELETE_CONTACT" :
            let a = [...state.contacts]

            a.map((item,index)=>{
                a.splice(index,1)
            })
            state = {...state,contacts: a}
            break
        case "EDIT_CONTACTDATA" :
            state={...state,editData: action.payload}
            break
        case "EDIT_CONTACTSAVE" :
            let b = state.contacts.map(item=>{
                let data = state.editData

                if (item.id === data.id){
                    item={
                        ...item,
                        email: action.payload.email,
                        phone:action.payload.phone,
                        address: action.payload.address,
                        twitter:action.payload.twitter


                    }
                }
                return item

            })
            state={...state,contacts: b}



    }
    return state
}
export default ContactReducer