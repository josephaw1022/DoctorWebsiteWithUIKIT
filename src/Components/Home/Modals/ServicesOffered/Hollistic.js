import React from 'react'
import { Button, Modal } from 'reactstrap'

export default function Hollistic() {
    const [scrollingLongContent, setScrollingLongContent] = React.useState(
        false
    )
    const content = require('./modals.json')

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
                        {content.Type.Hollistic.Name}
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
                <div className="modal-body">{content.Type.Hollistic.Text}</div>
            </Modal>
        </>
    )
}
