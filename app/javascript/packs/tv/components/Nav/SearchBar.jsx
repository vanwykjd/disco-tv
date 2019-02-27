import React, { Component } from 'react';
import { Select, Spin, Form } from 'antd';
import debounce from 'lodash/debounce';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

const Option = Select.Option;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.lastFetchId = 0;
    this.fetchShow = debounce(this.fetchShow, 800);
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
  
  selectShow(show) {
    if (show) {
      this.props.history.push(`/tv_shows/${show}`)
    }
  }

  handleChange = (search) => {
    this.setState({
      search,
      data: [],
      fetching: false,
    });
  }
  
  render() {
    const { fetching, data, search } = this.state;
    
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
        style={{ width: '350px' }}
      >
        {data.map( show =>
          <Option key={show.key}>{show.value}</Option>
        )}
      </Select>
    );
  }
}
export default withRouter(SearchBar)