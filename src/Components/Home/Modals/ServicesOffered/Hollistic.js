import React from "react";
import { Button, Modal } from "reactstrap";
import { useState } from "react";

export default function Hollistic(props) {
  const [scrollingLongContent, setScrollingLongContent] = useState(false);

  return (
    <>
      <Button
        className="btn-neutral"
        color="link"
        onClick={() => setScrollingLongContent(true)}
      >
        <i className="fa fa-book mr-1" />
        Show more
      </Button>

      <Modal
        isOpen={scrollingLongContent}
        toggle={() => setScrollingLongContent(false)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            {/* {props.theData.Hollistic.Name} */}
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setScrollingLongContent(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body"></div>
      </Modal>
    </>
  );
}
