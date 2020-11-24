import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function Pagination_fun() {
    return (
        <div className="pagination">
            <Pagination>
                <Pagination.First />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Last />
            </Pagination>
        </div>
    )
}
