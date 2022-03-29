import { useRef } from "react";
import useModal from "../hooks/useModal";
import "./MovieModal.css";

const MovieModal = (props) => {
  const modalRef = useRef();
  useModal(modalRef, () => props.setModalOpen(false));

  return (
    <div className="presentation" ref={modalRef}>
      <div className="wrapper-modal">
        <div className="modal" ref={modalRef}>
          <span
            onClick={() => props.setModalOpen(false)}
            className="modal-close"
          >
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>
              {props.release_date ? props.release_date : props.first_air_date}
            </p>

            <h2 className="modal__title">
              {props.title ? props.title : props.name}
            </h2>
            <p className="modal__overview"> 평점: {props.vote_average}</p>
            <p className="modal__overview"> {props.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
