import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both PlantList and PlantListItem from this file

// PlantList renders a bootstrap list item
export function PlantList({ children }) {
  return <ul className="list-group">{children}</ul>;
}
// in case of React key-based erros, copy&paste this to the ul attributes: key= {children.id}

// PlantListItem renders a bootstrap list item containing data from the Trefle api call
export function PlantListItem({
  thumbnail,
  title,
  sciName,
  idNo,
  href,
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h3>{sciName}</h3>
            <p>{idNo}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to summary!
            </a>
          </Col>
        </Row>

      </Container>
    </li>
  );
}
