


export const Students = (props) => {
    const { students } = props;

    return (
        <ul>
            {
                students?.map((student, index) => {
                    return <li key={`student-${index}`}>{student?.name}</li>
                })
            }
        </ul>
    )
}