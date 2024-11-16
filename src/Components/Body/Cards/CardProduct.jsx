import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Badge from 'react-bootstrap/Badge';


function CardProduct({ linkPhoto, name, description, price }) {
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={linkPhoto} />
                    <Card.Body>
                        <Card.Title>
                            {name} <Badge bg="secondary">Nieuw</Badge>
                        </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            <span style={{ color: 'green', fontSize: '1.2em' }}>€{price}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

export default CardProduct