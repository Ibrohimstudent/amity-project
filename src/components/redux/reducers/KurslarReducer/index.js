function KurslarReducer(state={
    kurslar:[
        {id:1,name:"Frontend", price:"700,000 sum", direction:"IT Programming", category:"Developing",
        description:"Starting from HTML5 and CSS3"
        },
        {id:2,name:"Backend", price:"800,000 sum", direction:"IT Programming", category:"Developing",
        description:"Starting from Python"
        }
    ],
    editData:""
},action) {
    switch (action.type) {
        case "ADD_COURSE" :
            let course = [...state.kurslar]
            course.push({
                id: state.kurslar.length + 1,
                name: action.payload.name,
                price: action.payload.price,
                direction: action.payload.direction,
                category: action.payload.category,
                description: action.payload.description

            })
            state = {...state, kurslar: course}
            break
        case "DELETE_COURSE" :
            let a = [...state.kurslar]

            a.map((index => {
                a.splice(index,1);
            }));

            state = {...state, kurslar: a}
            break
        case "EDIT_COURSEDATA" :
            state = {...state, editData: action.payload}
            break
        case "EDIT_COURSESAVE" :
            let b = state.kurslar.map(item => {
                let data = state.editData

                if (item.id === data.id) {
                    item = {
                        ...item,
                        name: action.payload.name,
                        price: action.payload.price,
                        direction: action.payload.direction,
                        category: action.payload.category,
                        description: action.payload.description

                    }
                }
                return item

            })
            state = {...state, kurslar: b}
    }
    return state
    
}

export default KurslarReducer