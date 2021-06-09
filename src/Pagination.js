import React from 'react';
import './Pagination.css';

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
    setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
    }

    function changePage(event) {
    }

    const getPaginatedData = () => {
    };

    const getPaginationGroup = () => {
    };

    return (
    );
}