


export const QueryResult = (props) => {

    const { loading, children } = props;

    if (loading) {
        return <h1>Loading</h1>
    }

    return children
}