import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const CardItem = (props) => {
  return (
    <Card>
    <CardHeader>Company: {props.name}</CardHeader>
    <CardBody>
      <CardTitle>Title: {props.subtitle}</CardTitle>
      <CardText>Created at: {props.date}</CardText>
      <Button href={props.link}>Visit Company Website</Button>
    </CardBody>
    <CardFooter>Location: {props.location}</CardFooter>
  </Card>
  );
};

export default CardItem;
