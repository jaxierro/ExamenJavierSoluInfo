import React, { useState } from 'react'
import RowsAlbum from './rowsalbum';

const DataAlbum = ({data, setDataToAccess, onDelete }) => {
    return (
            
            <div>
            <div className="card card-primary">
                <br></br><br></br>
            <div className="card-header">
                            <h3 class="card-title">Lista Albums</h3>
                        </div><br></br>
                    
                <table className='datatable table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>albumId</th>
                                <th>title</th>
                                <th>url</th>
                                <th>thumbnailUrl</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                              {
                                data.lenght === 0 ? <tr><td colSpan="4">Sin  Datos</td></tr>:
                                data.map((item) => <RowsAlbum Key={item.id} item={item} setDataToAccess={setDataToAccess} onDelete={onDelete} />)
                              }
                            </tbody>
                </table>

                </div>

                </div>
);
};

export default DataAlbum;