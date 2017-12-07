import React from 'react';
import PropTypes from 'prop-types';
import SearchResultContainer from "./SearchResultContainer";
import { Card, CardTitle, CardText } from 'material-ui/Card';
import SearchBarContainer from './SearchBar/SearchBarContainer.jsx';

const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="I'm reading this book today"
      subtitle=""
    />
<<<<<<< HEAD
    <SearchResultContainer />
    
=======
    
    {secretData && <CardText style={{ fontSize: '18px', color: 'green' }}></CardText>}
    <SearchBarContainer />
>>>>>>> dd4c08e3f40872da94636f707d89edbe58d3c449
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;