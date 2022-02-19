
interface ReviewingProperties{
    title?: string
}

const Components: React.FC<ReviewingProperties> = (props) => {
    return (
        <>
            <h1>component and props studies with react</h1>
            {props.title}
        </>
    )
}

const ComponentsProps = () => {
    return(
        <>
            <Components />
            <Components title="it works !"/>
        </>
    )
}

export default ComponentsProps