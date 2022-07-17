


export const Students = (props) => {
    const { students } = props;

    return (
        <>
            <h1>Students:</h1>
            <ul>
            {
                students?.map((student, index) => {
                    return <li key={`student-${index}`}>{student?.name}</li>
                })
            }
        </ul>
        </>
    )
}