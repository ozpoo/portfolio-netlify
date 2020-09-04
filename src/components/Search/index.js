import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Index } from 'elasticlunr'
import { Link } from 'gatsby'

import { StaticQuery, graphql } from 'gatsby'

const Search = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => <SearchComponent searchIndex={data.siteSearchIndex.index} />}
  />
)

Search.propTypes = {
  searchIndex: PropTypes.object,
}

export default Search

class SearchComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    console.log(this.state.results)
    return (
      <>
        <input type='text' value={this.state.query} onChange={this.search} />
        <ul className='list-unstyled'>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={page.slug}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
