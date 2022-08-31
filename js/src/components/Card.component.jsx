import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CardComponent = ({ id, location, items, space, pricelist, status }) => {
    console.log(location);
    let total = 0;
    const totalPrice = () => { 
        items.map((item) => {
            total = total + (item.price * item.quantity) 
        });

        return total
    }
    return (
        <div style={{ boxShadow:'0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 3px 10px 0 rgba(0, 0, 0, 0.05)', padding:20, borderRadius:5 }}><Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Order #{id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{space} from {pricelist}</Card.Subtitle>
                <Card.Text>
                    {items.length} items {totalPrice}
                </Card.Text>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Card.Text>
                        {location}
                    </Card.Text>
                    <Button variant="primary">Approve</Button>
                </div>
            </Card.Body>
        </Card></div>
        
    );
}

export default CardComponent;