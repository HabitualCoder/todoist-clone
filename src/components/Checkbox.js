import React from 'react';
import { firebase } from '../firebase';

function Checkbox({ id }) {
    const archivedTask = () => {
        firebase.firestore().collection('tasks').doc(id).update({ archived: true });
    }
    return (
        <div>
            <div className="checkbox-holder" data-testid="checkbox-action" onClick={() => archivedTask()}>
                <span className="checkbox"></span>
            </div>
        </div>
    )
}

export default Checkbox;
