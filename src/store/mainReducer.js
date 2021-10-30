const SET_PERSON_DATA = 'SET_PERSON_DATA'

const initialState = {
    personData: {
        name: 'Василий',
        age: 25,
        children: [
            { id: 1, name: 'Петр', age: 5 },
            { id: 2, name: 'Lena', age: 7 },
            { id: 3, name: 'Zhenya', age: 10 },
        ],
    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_DATA:
            // console.log(action.personData)
            return {
                personData: {
                    name: action.formData.name,
                    age: action.formData.age,
                    children: [
                        ...action.formData.children
                    ]
                }
            }

        default:
            return state
    }
}

/* ACTIONS */
export const setPersonData = (formData) => ({ type: SET_PERSON_DATA, formData })

export default mainReducer