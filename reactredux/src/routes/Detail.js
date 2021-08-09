import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDo }) {
  const id = useParams();
  console.log(id);
  return (
    <React.Fragment>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </React.Fragment>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
