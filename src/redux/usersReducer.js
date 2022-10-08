const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg', 
            followed: false, fullName: 'Max F.', status: 'work', location: {city: 'Moscow', country: 'Russia'} },
        {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg', 
            followed: true, fullName: 'Anna D.', status: 'study', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Misha_Collins_%26_Jensen_Ackles_%2848478258422%29%28c%29.jpg', 
            followed: false, fullName: 'Alex S.', status: 'vacation', location: {city: 'Kiev', country: 'Ukraine'} }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return  u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return  u;
                })
            }
        
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: 
            return state;
    }
}

export const followActionCreator = (userId) => ({
    type: FOLLOW,
    userId 
})
export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users
})

export default usersReducer;