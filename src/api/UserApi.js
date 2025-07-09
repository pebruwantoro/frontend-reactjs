export const userLogin = async ({email, password}) => {
   return await fetch(`${import.meta.env.VITE_API_BACKEND_PATH}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
   });
}

export const userCreateNewAccount = async (token, {name, email, password, role}) => {
    return await fetch(`${import.meta.env.VITE_API_BACKEND_PATH}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            name,
            email,
            password,
            role,
        })
    })
}

export const userRegister = async ({name, email, password, role}) => {
    return await fetch(`${import.meta.env.VITE_API_BACKEND_PATH}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password,
            role,
        })
    })
}

export const userProfile = async (token) => {
    return await fetch(`${import.meta.env.VITE_API_BACKEND_PATH}/users/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const userList = async (token) => {
    return await fetch(`${import.meta.env.VITE_API_BACKEND_PATH}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}