import Card from 'react-bootstrap/Card'


function BreweryCard({brewery}) {
    debugger
    return (
        <Card className="m-3">
            {/* <Card.Img variant="top" alt="No Poster" src={props.poster==="N/A" ? NoImage : props.poster} />  */}
            <Card.Body>
                <Card.Title>{brewery.name} - {brewery.location}</Card.Title>
            </Card.Body>
            <Card.Footer>
                Here is the footer
            </Card.Footer>
        </Card>
    )
}

export default BreweryCard