import moment from "moment";

export const eventHeaders = {
    "date": "Date",
    "name": "Name",
    "location": "Location"
}

export const events = [
    {
        "id": 1,
        "date": moment('1/1/2021'),
        "name": "Mason City Fair",
        "location": "somewhere over the rainbow"
    },
    {
        "id": 2,
        "date": moment('2/1/2021'),
        "name": "New City Fair",
        "location": "somewhere really far over the rainbow"
    }
]