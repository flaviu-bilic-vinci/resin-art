import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import CardPerson from "../Cards/CardPerson"

const persons = [
    {
        id: 1,
        linkPhoto: "https://picsum.photos/200/200.webp",
        name: "name1",
        linkSocial: "LinkSocial person 1"
    },
    {
        id: 2,
        linkPhoto: "https://picsum.photos/200/200.webp",
        name: "name2",
        linkSocial: "Link social person 2"
    },
    {
        id: 3,
        linkPhoto: "https://picsum.photos/200/200.webp",
        name: "name3",
        linkSocial: "Link social person 3"
    },
    {
        id: 4,
        linkPhoto: "https://picsum.photos/200/200.webp",
        name: "name4",
        linkSocial: "LinkSocial person 4"
    }
]

function CardBodyPersons(){
    return (
        <>
            {persons.map(p => (
                <CardPerson 
                key={p.id} 
                linkPhoto={p.linkPhoto} 
                name={p.name} 
                linkSocial ={p.linkSocial}/>
            ))}
        </>
    )
}

export default CardBodyPersons