import React from 'react';
import PropType from 'prop-types';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TimeAgo from 'timeago-react';

const Repos = ({ repos }) => {
  return (
    <Table className='card'>
      <TableHead>
        <TableRow>
          <TableCell>Repository</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Language</TableCell>
          <TableCell>Updated</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {repos.map((repo) => (
          <TableRow key={repo.name}>
            <TableCell>{repo.name}</TableCell>
            <TableCell>{repo.description}</TableCell>
            <TableCell>{repo.language}</TableCell>
            <TableCell><TimeAgo datetime={repo.updated_at} /></TableCell>
            <TableCell><Button variant='contained' color='primary' href={repo.html_url}>Go To Repo</Button></TableCell>
          </TableRow> 
        ))}
      </TableBody>
    </Table>
  )
}

Repos.propTypes = {
  repos: PropType.array.isRequired
}

export default Repos
