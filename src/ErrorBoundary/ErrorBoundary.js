import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { OuterWrapper, InnerWrapper, Text, SubText } from './styled';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch( error, errorInfo ) {
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return (
          <OuterWrapper>
            <InnerWrapper>
              <Text>{"Oops..."}</Text>
              <SubText>{"Something went wrong"}</SubText>
              <Link to={ '/' }>{ "Back to home" }</Link>
            </InnerWrapper>
          </OuterWrapper>
        );
      }

      return this.props.children; 
    }
  }

export default ErrorBoundary;