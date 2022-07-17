


export const Teachers = (props) => {
    const { teachers } = props;

    return (
        <>
        <h1>Teachers:</h1>
        <ul>
            {
                teachers?.map((teacher, index) => {
                    return <li key={`teacher-${index}`}>{teacher?.name}</li>
                })
            }
        </ul></>
    )
}