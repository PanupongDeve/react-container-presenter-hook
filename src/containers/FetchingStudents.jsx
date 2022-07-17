import { useState, useEffect } from 'react'


let INTITAIL_STUDENTS = {
    loading: true,
    students: [
        { name: 'Panupong'},
        { name: 'Wisit' },
        { name: 'Sirawich '},
        { name: 'Tanawat'}

    ]
}

export const FetchingStudents = (props) => {
    const [ statudentsStore, setStudents ] = useState(INTITAIL_STUDENTS)

    const fetchingStudents = async () => {
        setStudents({
            ...statudentsStore,
            loading: false
        })
    }

    useEffect(() => {
        fetchingStudents()
    }, [])

    const { loading, students } = statudentsStore;

    console.log(loading)

    if (loading) {
        return (<div>Loading</div>)
    }

    return  (
        <>
            { props.children({
                students
            })}
        </>
    )
}