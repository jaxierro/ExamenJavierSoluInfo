import React from 'react'

const RowsAlbum = ({item, setDataToAccess, onDelete }) => {

    let { albumId, title, url, thumbnailUrl, id } = item;

    return (

    <tr>
                    <td>{item.albumId}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td>{item.thumbnailUrl}</td>
                    <td><button type="button" className="btn btn-danger" onClick={() => onDelete(id)}>Eliminar</button>&nbsp;</td>
                </tr>

    );
         
};

export default RowsAlbum;