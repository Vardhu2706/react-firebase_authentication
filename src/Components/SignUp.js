// Importing Helpers
import React, { useRef } from "react";

// Importing Components/ Files
import { Form, Button, Card } from "react-bootstrap";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Sign Up</h2>

          {/* Sign Up Form */}
          <Form>
            {/* Email Field Form Group */}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>

            {/* Password Field Form Group */}
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>

            {/* Confirm Password Field Form Group */}
            <Form.Group id="confirm-password">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>

            <Button className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Already have an account?</div>
    </>
  );
};

export default SignUp;
