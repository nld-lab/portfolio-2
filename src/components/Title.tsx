interface Props {
    title : String
}

const Title = ({title} : Props)=>{
    return(
        <h1 className="uppercase font-bold text-3xl mb-5 text-center">{title}</h1>
    )
    
}

export default Title;