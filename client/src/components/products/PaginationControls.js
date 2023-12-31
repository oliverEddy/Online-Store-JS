import styles from "./PaginationControls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PaginationControls = ({ page, setPage, currentPage, totalPages }) => {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
  const onPrev = () => {
    if (!prevDisabled) {
      setPage(page - 1);
    }
  };
  const onNext = () => {
    if (!nextDisabled) {
      setPage(page + 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div>
          <button
            aria-label="Previous page"
            onClick={onPrev}
            disabled={prevDisabled}
            data-testid="prev-page"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div>
          <button
            aria-label="Next page"
            onClick={onNext}
            disabled={nextDisabled}
            data-testid="next-page"
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
