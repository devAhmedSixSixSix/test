"use client"
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';


const FormOne = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="الاسم بالكامل" className="rounded-5"/>        
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="رقم الهاتف" className="rounded-5"/>        
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Select aria-label="Default select example" className="rounded-5 mb-3">
              <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Button className="rounded-5 px-5" variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
          
        
        </Form>
      </Container>
    </div>
  )
}

export default FormOne
