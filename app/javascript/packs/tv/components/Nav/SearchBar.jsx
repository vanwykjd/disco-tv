import React, { Component } from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import { withRouter, Route, Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Option = Select.Option;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.lastFetchId = 0;
    this.fetchShow = debounce(this.fetchShow, 800);
    this.selectShow = this.selectShow.bind(this)
  }

  state = {
    data: [],
    search: null,
    fetching: false,
  }

  fetchShow = (search) => {
    if (search == '') {
      return;
    }
    console.log('fetching show', search);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch( `/search?query=${search}`)
      .then(response => response.json())
      .then(responseData => {
        if (fetchId !== this.lastFetchId) { 
          return;
        }
        const data = responseData.map(show => ({
          key: show.id,
          value: show.name,
        }));
        this.setState({ data, fetching: false });
      });
  }

  handleChange = (search) => {
    this.setState({
      data: [],
      search: null,
      fetching: false,
    });
  }
  
  selectShow = (search) => {
    this.props.history.push(`${ROUTES.TV_SHOWS}/${search}`);
  }
  
  render() {
    const { fetching, data } = this.state;
    const search = (this.state.search) ? this.state.search.value : undefined
    
    return (
      <Select
        value={search}
        showSearch={true}
        showArrow={false}
        placeholder="Search Shows"
        notFoundContent={fetching ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={this.fetchShow}
        onChange={this.handleChange}
        onSelect={this.selectShow}
        onEnter={this.selectShow}
        style={{ width: '100%'}}
      >
        {data.map( show =>
          <Option key={show.key}>
            {show.value}
          </Option>
        )}
      </Select>
    );
  }
}
export default withRouter(SearchBar)