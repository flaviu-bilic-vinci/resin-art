import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function CardPerson({linkPhoto, name, linkSocial}){
    return (
        <>
            <Col sm={6} md={6} className='d-flex justify-content-center'>
                <Card className="my-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={linkPhoto} />
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

export default CardPerson