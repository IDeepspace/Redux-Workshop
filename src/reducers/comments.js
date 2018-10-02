const initialState = [
    {
        id: '111',
        text: 'hello',
        postId: '1'
    },
    {
        id: '222',
        text: 'react',
        postId: '2'
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
