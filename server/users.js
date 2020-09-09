const users = []

const addUser = ({id,name,room}) => {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existingUser = users.find((user) => user.room === room &&
    user.name === name)

    if(!name || !room) return { error: 'Username and room are required.' };
    if(existingUser){
        return ('this username is taken ')
    }

    const user = {id,name,room}
    users.push(user)

    return {user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index,1)
    }
}

const getUser = (id) => user.find((user) => user.id === id)

const getUsersInRoom = (room) => users.filter((user) => user.room === room)

module.exports = {addUser,removeUser,getUser,getUsersInRoom}