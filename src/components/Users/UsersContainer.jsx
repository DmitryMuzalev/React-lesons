const { connect } = require('react-redux');
const { default: Users } = require('./Users');

const mapStateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
