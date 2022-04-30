
export function getItem(state) {
    const localNotes = localStorage.getItem('notes')
    if (localNotes) {
        state.notes = JSON.parse(localNotes)
    }
    
    return state.notes
}


export function setItem(state) {
    localStorage.setItem('notes', JSON.stringify(state))
}

