const initialState = [
    {
        id: '111',
        text: 'hello',
        postId: '11'
    },
    {
        id: '222',
        text: 'react',
        postId: '22'
    }
]
const comments = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            const comments = [...state, action.comment]
            return comments
        default:
            return state
    }
}
export default comments
