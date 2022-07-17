import { useState, useEffect } from 'react'


let INTITAIL_TEACHERS = {
    loading: true,
    teachers: [
        { name: 'Jan Dev'},
        { name: 'Jan Ex'}

    ]
}

export const useTeachers = (props) => {
    const [ teachersStore, setTeachers ] = useState(INTITAIL_TEACHERS)

    const fetchingTeachers = async () => {
        setTimeout(() => {
            setTeachers({
                ...teachersStore,
                loading: false
            })
        }, 3000)
    }

    useEffect(() => {
        fetchingTeachers()
    }, [])

    const { loading, teachers } = teachersStore;

    console.log(loading)

    return  [teachers , loading]
}