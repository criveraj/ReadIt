import React from 'react';
import PropTypes from 'prop-types';
import SearchResultContainer from "./SearchResultContainer";
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Which book are you reading today?"
      subtitle=""
    />
    <SearchResultContainer />
    
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;