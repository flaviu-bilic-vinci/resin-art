import CardProduct from "../Cards/CardProduct"

const products = [
    {
        id: 1,
        linkPhoto: "https://picsum.photos/200/200.webp",
        name: "name1",
        description: "Description product 1",
        price: 5
    },
    {
        id: 2,
        linkPhoto: "https://picsum.photos/200/200.webp",
        name: "name2",
        description: "Description product 2",
        price: 10
    },
    {
        id: 3,
        linkPhoto: "https://picsum.photos/200/200.webp",
        name: "name3",
        description: "Description product 3",
        price: 15
    }
]



function CardBody(){
    return (
        <>
            {products.map(p => (
                <CardProduct 
                key={p.id} 
                linkPhoto={p.linkPhoto} 
                name={p.name} 
                description={p.description} 
                price={p.price}/>
            ))}
        </>
    )
}

export default CardBody