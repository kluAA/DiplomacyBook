import { connect } from "react-redux";
import { fetchSearchUsers, clearUsers } from "../../actions/search_actions";
import NavSearch from "./NavSearch";

const mapStateToProps = state => ({
    users: Object.values(state.entities.search)
});

const mapDispatchToProps = dispatch => ({
    fetchSearchUsers: query => dispatch(fetchSearchUsers(query)),
    clearUsers: () => dispatch(clearUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);