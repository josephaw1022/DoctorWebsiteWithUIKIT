import React from "react"
import { Button, Modal } from "reactstrap"

export const Hollistic = () => {
    const [scrollingLongContent, setScrollingLongContent] = React.useState(
        false
    )
    const content = require("./modals.json")

    const myobj = document.getElementById("navbar-main-here")

    function hideNav() {
        setScrollingLongContent(!scrollingLongContent)
        if (myobj.style.display === "none") {
            myobj.style.display = "block"
        } else {
            myobj.style.display = "none"
        }
        setScrollingLongContent(!scrollingLongContent)
    }

    function showNav() {
        setScrollingLongContent(!scrollingLongContent)
        if (myobj.style.display === "block") {
            myobj.style.display = "none"
        } else {
            myobj.style.display = "block"
        }
    }

    return (
        <>
            <Button
                className="btn-neutral"
                color="link"
                onClick={() => hideNav()}
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
                        onClick={() => showNav()}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body">{content.Type.Hollistic.Text}</div>
            </Modal>
        </>
    )
}

export default Hollistic
