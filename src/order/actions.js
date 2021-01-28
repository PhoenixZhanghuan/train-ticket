export const ACTION_SET_TRAIN_NUMBER = 'SET_TRAIN_NUMBER'
export const ACTION_SET_DEPART_STATION = 'SET_DEPART_STATION'
export const ACTION_SET_ARRIVE_STATION = 'SET_ARRIVE_STATION'
export const ACTION_SET_SEAT_TYPE = 'SET_SEAT_TYPE'
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE'
export const ACTION_SET_ARRIVE_DATE = 'SET_ARRIVE_DATE'
export const ACTION_SET_DEPART_TIME_STR = 'SET_DEPART_TIME_STR'
export const ACTION_SET_ARRIVE_TIME_STR = 'SET_ARRIVE_TIME_STR'
export const ACTION_SET_DURATION_STR = 'SET_DURATION_STR'
export const ACTION_SET_PRICE = 'SET_PRICE'
export const ACTION_SET_PASSENGERS = 'SET_PASSENGERS'
export const ACTION_SET_MENU = 'SET_MENU'
export const ACTION_SET_IS_MENU_VISIBLE = 'SET_IS_MENU_VISIBLE'
export const ACTION_SET_SEARCH_PARSED = 'SET_SEARCH_PARSED'

export function setTrainNumber(trainNumber) {
    return {type: ACTION_SET_TRAIN_NUMBER, payload: trainNumber}
}

export function setDepartStation(departStation) {
    return {type: ACTION_SET_DEPART_STATION, payload: departStation}
}

export function setArriveStation(arriveStation) {
    return {type: ACTION_SET_ARRIVE_STATION, payload: arriveStation}
}

export function setSeatType(seatType) {
    return {type: ACTION_SET_SEAT_TYPE, payload: seatType}
}

export function setDepartDate(departDate) {
    return {type: ACTION_SET_DEPART_DATE, payload: departDate}
}

export function setArriveDate(arriveDate) {
    return {type: ACTION_SET_ARRIVE_DATE, payload: arriveDate}
}

export function setDepartTimeStr(departTimeStr) {
    return {type: ACTION_SET_DEPART_TIME_STR, payload: departTimeStr}
}

export function setArriveTimeStr(arriveTimeStr) {
    return {type: ACTION_SET_ARRIVE_TIME_STR, payload: arriveTimeStr}
}

export function setDurationStr(durationStr) {
    return {type: ACTION_SET_DURATION_STR, payload: durationStr}
}

export function setPrice(price) {
    return {type: ACTION_SET_PRICE, payload: price}
}

export function setPassengers(passengers) {
    return {type: ACTION_SET_PASSENGERS, payload: passengers}
}

export function setMenu(menu) {
    return {type: ACTION_SET_MENU, payload: menu}
}

export function setIsMenuVisible(isMenuVisible) {
    return {type: ACTION_SET_IS_MENU_VISIBLE, payload: isMenuVisible}
}

export function setSearchParsed(searchParsed) {
    return {type: ACTION_SET_SEARCH_PARSED, payload: searchParsed}
}
