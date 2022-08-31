import React from 'react';
import CardComponent from './Card.component';
import data from '../data/orders.json';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

export const OrdersBoard = () => {
  let counter = 0;

  const orderCounter = (x) => {
    x.map((item) => {
      if (item.status === 'New') {
        counter++;
      }
    })
    return counter;
  }
  return (
    <span style={{ margin: 24 }}>
      <Container>
        
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          
          <div >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }}>
              <div style={{ fontSize: '18px', marginBottom: '25px' }}>New &nbsp;</div>
              <Badge style={{ color: 'red' }}>2</Badge>
            </div>
            
            {
              data.map((item) => {
                if (item.status === 'New') {
                  return (
                    <>
                      <CardComponent id={item.id} location={item.location} items={item.items} space={item.space.name} pricelist={item.pricelist.name} status={item.status} />
                      <div style={{marginBottom:'20px'}}></div>
                    </>
                    
                    
                  );
                  
                }
              })
            }

          </div>
          
          <div >
            <div style={{ fontSize: '18px', marginBottom: '25px' }}>Active</div>
            {
              data.map((item) => {
                if (item.status == 'Active') {
                  return (
                    <>
                      <CardComponent id={item.id} location={item.location} items={item.items} space={item.space.name} pricelist={item.pricelist.name} status={item.status} />
                      <div style={{ marginBottom: '20px' }}></div>
                    </>
                  );
                }
              })
            }

          </div>

          <div >
            <div style={{ fontSize: '18px', marginBottom: '25px' }}>Ready</div>
            {
              data.map((item) => {
                if (item.status == 'Ready') {
                  return (
                    <>
                      <CardComponent id={item.id} location={item.location} items={item.items} space={item.space.name} pricelist={item.pricelist.name} status={item.status} />
                      <div style={{ marginBottom: '20px' }}></div>
                    </>
                  );
                }
              })
            }

          </div>
        </div>
      </Container>

    </span>
  );
};
