import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

import api from '../../services/api';
import './styles.css';


export const ConteudoList = () => {
    const [conteudos, setConteudos] = useState([]);

    useEffect(() => {
        api.get('conteudos').then(response => {
            setConteudos(response.data);
        });
    }, []);

    return (
        <div className="conteudo-list">
            <h3>Conteúdos</h3>

            <Link to="/perfil">
                
            </Link>

            <Link to="/conteudo/novo">
                <button className="btn">Novo Conteúdo</button>
            </Link>


            <table className="table table-striped table-hover">
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Acoes</th>
                </thead>
                <tbody>
                    {conteudos.map(conteudo => (
                        <tr key={conteudo.id}>
                            <td>{conteudo.id}</td>
                            <td>{conteudo.nome_conteudo}</td>
                            <td>
                                <Link to={`/conteudo/${conteudo.id}`}><i className="fa fa-pencil"></i></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export const ConteudoEdit = () => {
    const [nomeConteudo, setNomeConteudo] = useState();
    const [pautas, setPautas] = useState([]);
    const [novaPauta, setNovaPauta] = useState('');
    const {conteudoId} = useParams();

    useEffect(() => {
        if (conteudoId) {
            api.get(`/conteudos/${conteudoId}`).then(response => {
                if (response.data) {
                    setNomeConteudo(response.data.nome_conteudo);
                    setPautas(response.data.pautas);
                }
            });
        }
    }, [conteudoId]);

    const salvarConteudo = () => {
        if (conteudoId !== 'novo') {
            api.post(`/conteudos/${conteudoId}`, {
                nome_conteudo: nomeConteudo
            }).then(() => {
                alert('Salvo!');
            });
        } else {
            api.post(`/conteudos`, {
                nome_conteudo: nomeConteudo
            }).then(response => {
                window.location = `/conteudo/${response.data.id}`;
            });
        }
    };

    const handleSubmitNovaPauta = (evt) => {
        evt.preventDefault();
        api.post(`/conteudos/${conteudoId}/pautas`, {
            desc_pauta: novaPauta
        }).then((response) => {
            setNovaPauta('');

            if (response.data) {
                setPautas(response.data.pautas);
            }
        })
    };

    const deletaPauta = (pautaId) => {
        api.delete(`/conteudos/${conteudoId}/pautas/${pautaId}`).then(response => {
            if (response.data) {
                setPautas(response.data.pautas);
            }
        });
    };

    return (
        <div className="conteudo-list">
            <h3>Conteúdo</h3>

            <div className="form-group">
                <h6>Nome: </h6>
                <input
                    className="form-control"
                    type="text"
                    value={nomeConteudo}
                    onChange={evt => setNomeConteudo(evt.currentTarget.value)}
                />
            </div>

            <button className="btn btn-success" onClick={salvarConteudo}>
                Salvar
            </button>

            {!!conteudoId && conteudoId !== 'novo' && (
                <div>
                    <hr />
                    <h4>Pautas</h4>
                    <table className="table table-striped table-hover">
                        <thead>
                            <th>Nome</th>
                            <th>Ações</th>
                        </thead>
                        <tbody>
                            {pautas.map(pauta => (
                                <tr key={pauta.id}>
                                    <td>{pauta.desc_pauta}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deletaPauta(pauta.id)}>
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <form onSubmit={handleSubmitNovaPauta}>
                        <div className="form-group">
                            <h4>Nova pauta:</h4>
                            <input
                                className="form-control"
                                type="text"
                                value={novaPauta}
                                onChange={evt => setNovaPauta(evt.currentTarget.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Adicionar</button>
                    </form>
                </div>
            )}
        </div>
    );
};
export default ConteudoList;


// export default function Conteudo({ history }){
//     const [pautas, setPautas] = useState([]);
//     const [desc_pautaA, setPautaA] = useState('');
//     const [desc_pautaB, setPautaB] = useState('');
//     const [desc_pautaC, setPautaC] = useState('');
//     const [desc_pautaD, setPautaD] = useState('');
//     const [nome_conteudo,setNovoConteudo] = useState('');
//     const [id,setID] = useState('');
//     const [conteudos, setConteudos] = useState(['']);


//     useEffect(() => {
//         if(!localStorage.getItem('usuario')){
//             history.push('');
//         }
//         api.get(`conteudos`).then(resp => {
//             setConteudos(resp.data);
//         })
//     }, []);

//     async function handleSubmit(event){
//         event.preventDefault()

//         history.push('/inicial');
//     }

//     async function cadastrarConteudo(event){
//         event.preventDefault()
//         const conteudoNovo = {nome_conteudo: nome_conteudo}

//         const conteudo = await api.post(`conteudos`,conteudoNovo).then(resp => {
//             return resp.data;
//         }).catch(console.log(`Error: ${console.error}`));

//         api.get(`conteudos`).then(resp => {
//             setConteudos(resp.data);
//         })

//         await api.get(`conteudo/${nome_conteudo}`).then(resp => {
//             setID(resp.data);
//         })

//         const pautaA = {desc_pauta: desc_pautaA}
//         await api.post(`conteudos/${conteudo.id}/pautas`,pautaA).then(resp => {
//             return resp.data;
//         }).catch(console.log(`Error: ${console.error}`));

//         const pautaB = {desc_pauta: desc_pautaB}
//         await api.post(`conteudos/${conteudo.id}/pautas`,pautaB).then(resp => {
//             return resp.data;
//         }).catch(console.log(`Error: ${console.error}`));

//         const pautaC = {desc_pauta: desc_pautaC}
//         await api.post(`conteudos/${conteudo.id}/pautas`,pautaC).then(resp => {
//             return resp.data;
//         }).catch(console.log(`Error: ${console.error}`));

//         const pautaD = {desc_pauta: desc_pautaD}
//         await api.post(`conteudos/${conteudo.id}/pautas`,pautaD).then(resp => {
//             return resp.data;
//         }).catch(console.log(`Error: ${console.error}`));

//         history.push('/inicial');
//     }

//     async function cancelar(event){
//         event.preventDefault();

//         history.push('/inicial');
//     }
//     async function popular(conteudo_id){
//         api.get(`conteudos/${conteudo_id}/pautas`).then(resp => {
//             if (resp.data && resp.data.pautas) {
//                 setPautas(resp.data.pautas);
//             } else {
//                 setPautas([]);
//             }
//         })

//         //const texto = pautas.pautas.map(pauta => (pauta.desc_pauta));

//         //alert(texto);
//     }

//     return (
//         <>
//         <p>
//           <strong>Cadastrar Conteúdo</strong>
//         </p>

//             <form onSubmit = {handleSubmit}>
//                 <label>Selecionar Conteúdo já cadastrado:</label>
//                 <select id="listaConteudos" onChange={event => popular(event.target.value)}>
//                     <option>Selecione um Conteúdo</option>
//                     {conteudos.map(conteudo => (<option key={conteudo.id} value={conteudo.id}>
//                         {conteudo.nome_conteudo}</option>))}
//             </select>

//             <label>Pautas Existentes:</label>
//             <select id="listaPautas">
//                 <option value = '0'>Pautas Relacionadas</option>
//                 {pautas.map(pauta => (<option key={pauta.id} value={pauta.id}>
//                     {pauta.desc_pauta}</option>))}
//                 </select>
//         </form>

//         <form onSubmit = {handleSubmit}>
//             <label>Novo Conteúdo</label>
//             <input
//             id="nome_conteudo"
//             type="nome_conteudo"
//             placeholder="Adicione Novo Conteúdo"
//             value = {nome_conteudo}
//             onChange={ event => setNovoConteudo(event.target.value)}
//             />
//         </form>
//         <form onSubmit = {handleSubmit}>
//             <label htmlFor="desc_pauta">PAUTAS*</label>
//             <input
//             id="desc_pauta"
//             type="desc_pauta"
//             placeholder="Cadastrar Pauta 01"
//             value = {desc_pautaA}
//             onChange={ event => setPautaA(event.target.value) }
//             />
//         </form>
//         <form onSubmit = {handleSubmit}>
//             <input
//             id="desc_pauta"
//             type="desc_pauta"
//             placeholder="Cadastrar Pauta 02"
//             value = {desc_pautaB}
//             onChange={ event => setPautaB(event.target.value) }
//             />
//         </form>
//         <form onSubmit = {handleSubmit}>
//             <input
//             id="desc_pauta"
//             type="desc_pauta"
//             placeholder="Cadastrar Pauta 03"
//             value = {desc_pautaC}
//             onChange={ event => setPautaC(event.target.value) }
//             />
//         </form>
//         <form onSubmit = {handleSubmit}>
//             <input
//             id="desc_pauta"
//             type="desc_pauta"
//             placeholder="Cadastrar Pauta 04"
//             value = {desc_pautaD}
//             onChange={ event => setPautaD(event.target.value) }
//             />
//         </form>
//         <button className="btn" onClick={cadastrarConteudo}>Cadastrar</button>
//         <button className="btn" onClick={cancelar}>Cancelar</button>
//         </>
//         )
// }