import { useState } from 'react';





const Conge = () => {
    const [name, setName] = useState('');
    const [cin, setCin] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [typeConge, setTypeConge] = useState('');
    const [cause, setCause] = useState('');
    const [statut, setStatut] = useState('');



    return (
        <div className='create'>
            <h2>NEW REQUEST</h2>
            <form>

                <label>name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label>cin</label>
                <input
                    type="text"
                    value={cin}
                    onChange={(e) => setCin(e.target.value)} />

                <label>date de debut</label>
                <input
                    type="date"
                    value={dateDebut}
                    onChange={(e) => setDateDebut(e.target.value)} />

                <label>date de fin</label>
                <input
                    type="date"
                    value={dateFin}
                    onChange={(e) => setDateFin(e.target.value)} />

                <label>type de conge</label>
                <select
                    value={typeConge}
                    onChange={(e) => setTypeConge(e.target.value)} >

                    <option value="congé payé">Congé payé</option>
                    <option value="congé non payé">Congé non payé</option>
                    <option value="congé maladie">Congé maladie</option>
                    <option value="congé pour raisons familiales">Congé pour raisons familiales</option>
                    <option value="congé paternité">Congé paternité</option>
                    <option value="congé maternité">Congé maternité</option>
                </select>

                <label>cause</label>
                <textarea
                    value={cause}
                    onChange={(e) => setCause(e.target.value)}>
                </textarea>

                <select
                    value={statut}
                    onChange={(e) => setStatut(e.target.value)} 
                    >
                    <option value="planifée">Planifée</option>
                    <option value="non planifée">Non planifée</option>


                </select>

                <button>
                    submit
                </button>

            </form>
        </div >
    );
}

export default Conge;