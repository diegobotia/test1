import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './book.reducer';

export const BookDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const bookEntity = useAppSelector(state => state.book.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bookDetailsHeading">Book</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{bookEntity.id}</dd>
          <dt>
            <span id="isbn">Isbn</span>
          </dt>
          <dd>{bookEntity.isbn}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{bookEntity.name}</dd>
          <dt>
            <span id="publishYear">Publish Year</span>
          </dt>
          <dd>{bookEntity.publishYear}</dd>
          <dt>
            <span id="copies">Copies</span>
          </dt>
          <dd>{bookEntity.copies}</dd>
          <dt>
            <span id="cover">Cover</span>
          </dt>
          <dd>
            {bookEntity.cover ? (
              <div>
                {bookEntity.coverContentType ? (
                  <a onClick={openFile(bookEntity.coverContentType, bookEntity.cover)}>
                    <img src={`data:${bookEntity.coverContentType};base64,${bookEntity.cover}`} style={{ maxHeight: '30px' }} />
                  </a>
                ) : null}
                <span>
                  {bookEntity.coverContentType}, {byteSize(bookEntity.cover)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>Publisher</dt>
          <dd>{bookEntity.publisher ? bookEntity.publisher.name : ''}</dd>
          <dt>Author</dt>
          <dd>
            {bookEntity.authors
              ? bookEntity.authors.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.firstName}</a>
                    {bookEntity.authors && i === bookEntity.authors.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/book" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Volver</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/book/${bookEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Editar</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BookDetail;
