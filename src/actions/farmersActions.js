export const HIRE_FARMER = 'HIRE_FARMER'
export const PAY_FARMER = 'PAY_FARMER'
export const FIRE_FARMER = 'FIRE_FARMER'

export const hireFarmer = (name) => ({
    type: HIRE_FARMER,
    id: new Date().getTime(),
    name,
})

export const payFarmer = (id) => ({
    type: PAY_FARMER,
    id
})

export const fireFarmer = (id) => ({
    type: FIRE_FARMER,
    id
})